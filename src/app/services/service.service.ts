import { Injectable } from '@angular/core';
import {CustomerList} from '../model/customerlist'
//import { FormsModule } from '@angular/forms';
import { Observable, observable, forkJoin } from 'rxjs';
import { HttpClient,HttpResponse} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  list:CustomerList[];
  Clists:CustomerList;

  api_url1: string;
  api_url2:string;
  /*constructor(){
    this.list=[
     { Name:'abc', WaterMeterNo:123 , CustomerCode:123, PhoneNo:123 , Address:'abc', PreviousMR:123,PresentMR:234}
    ]*/
  constructor(private http: HttpClient) {
    this.api_url1=environment.api_url1;
    this.api_url2=environment.api_url2;
   }
/*getAll():Observable<CustomerList[]>{
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
 }*/

 public getAll(): Observable<CustomerList[]>{
   return this.http.get<CustomerList[]>(this.api_url1);
 }

 public add(clist:CustomerList) : Observable<CustomerList>{
  return this.http.post<CustomerList>(`${this.api_url1}`+'/consumer'+'/create',clist);
  }
 public getById(consumerId : number): Observable<CustomerList>{
   return this.http.get<CustomerList>(`${this.api_url1}/${consumerId}`);
 }
 public modify(clist:CustomerList): Observable<CustomerList>{
   return this.http.put<CustomerList>(`${this.api_url1}`+'/consumer'+'/update',clist);
 }
 public modifyChallan(clist:CustomerList): Observable<CustomerList>{
  return this.http.put<CustomerList>(`${this.api_url1}`+'/challan'+'/update',clist);
}
 
}
