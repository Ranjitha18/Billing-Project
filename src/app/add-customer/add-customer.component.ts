import { Component, OnInit } from '@angular/core';
import { CustomerList } from '../model/customerlist';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

   Clist:CustomerList;

  constructor(private Ss:ServiceService) { }

  ngOnInit()  {
      this.Clist=new CustomerList();
  }
  addC(){
    this.Ss.add(this.Clist).subscribe(
      ()=>{}
    )
  }

}
