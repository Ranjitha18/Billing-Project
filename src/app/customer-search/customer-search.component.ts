import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../services/service.service' ;
import { Router } from '@angular/router';
import {CustomerList} from '../model/customerlist'
//import { error } from '@angular/compiler/src/util';
@Component({
  selector: 'app-customer-search',
  templateUrl: './customer-search.component.html',
  styleUrls: ['./customer-search.component.css']
})
export class CustomerSearchComponent implements OnInit {
  list:CustomerList[];
  errMsg:string;

  constructor(private Ss:ServiceService,private router:Router) {
    this.list=null;
    this.errMsg=null;
   }
     
  ngOnInit() {

    /* console.log("method is called");
    this.ls.getAll().subscribe(
      (data) => { this.list = data },
     
      (error) => { this.errMsg = "Unable to reach the server. Please try after some time." }
    );
    } */
   this.Ss.getAll().subscribe(
     (data) =>{this.list = data},
     (error) =>{this.errMsg="Unable to load"}
   )

   }
}
