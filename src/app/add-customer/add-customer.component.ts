import { Component, OnInit } from '@angular/core';
import { CustomerList } from '../model/customerlist';
import { ServiceService } from '../services/service.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

    list:CustomerList;
    isNew:boolean;
   ///added:boolean=true;

  constructor(private actRt:ActivatedRoute,private Ss:ServiceService,private router : Router) {
    this.list=new CustomerList();
    this.isNew=true;
    

   }

  ngOnInit()  {
    /*  this.clist=new CustomerList();
  }
  addC(){
    this.Ss.add(this.clist).subscribe(
      ()=>{}
    );
    this.added=false;
  }
  

    }*/
    this.actRt.params.subscribe(
      (params)=>{
        let consumerId = params.consumerId;
        if(consumerId){
          this.isNew=false;
          this.Ss.getById(consumerId).subscribe(
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
       let consumerId = data.consumerId;
       this.router.navigateByUrl(`/list/${this.isNew?0:1}/${consumerId}`);
     }
   );
  }
 
  }

