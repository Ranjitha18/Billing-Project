import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../services/service.service' ;
import {CustomerList} from '../model/customerlist'
@Component({
  selector: 'app-customer-search',
  templateUrl: './customer-search.component.html',
  styleUrls: ['./customer-search.component.css']
})
export class CustomerSearchComponent implements OnInit {
  list:CustomerList[];
  errMsg:string;

  constructor(private ls:ServiceService) {
    this.list=null;
    this.errMsg=null;
   }
     
  ngOnInit(): void {

    console.log("method is called");
    this.ls.getAll().subscribe(
      (data) => { this.list = data },
     
      (error) => { this.errMsg = "Unable to reach the server. Please try after some time." }
    );
    }


}
