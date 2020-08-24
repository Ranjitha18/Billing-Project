import { Component, OnInit } from '@angular/core';
import { CustomerList } from '../model/customerlist';
import { ServiceService } from '../services/service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  list:CustomerList;
  isNew:boolean;

  constructor(private actRt:ActivatedRoute,private Ss:ServiceService,private router : Router) {
    this.list=new CustomerList();
    this.isNew=true;
   }
   

  ngOnInit(): void {

    this.actRt.params.subscribe(
      (params)=>{
        let id = params.id;
        if(id){
          this.isNew=false;
          this.Ss.getById(id).subscribe(
            (data)=>{this.list=data}
          );
        }
      }
    );
  }
  addC(){
    let ob;

    if(this.isNew){
   ob=this.Ss.add(this.list);
    }else{
      ob=this.Ss.modify(this.list);
    }
   ob.subscribe(
     (data)=>{
       let id = data.id;
       this.router.navigateByUrl(`/list/${this.isNew?0:1}/${id}`);
     }
   );
  }
}
  


