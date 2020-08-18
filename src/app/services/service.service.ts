import { Injectable } from '@angular/core';
import {CustomerList} from '../model/customerlist'
//import { FormsModule } from '@angular/forms';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  list:CustomerList[];
  Clists:CustomerList;

  constructor() {
    this.list=[
      
    ];
   }
 getAll():Observable<CustomerList[]>{
   return new Observable(
     (observer)=>{
       observer.next(this.list);
       observer.complete();
     }
   )
 }

 add(Clists:CustomerList):Observable<any>{
   return new Observable(
     (observer)=>{
       this.list.push(Clists);
       observer.complete();
     }
   )
 }

}
