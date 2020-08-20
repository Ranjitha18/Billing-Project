import { Injectable } from '@angular/core';
import {CustomerList} from '../model/customerlist'
//import { FormsModule } from '@angular/forms';
import { Observable, observable } from 'rxjs';
import { HttpClient,HttpResponse} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  list:CustomerList[];
  Clists:CustomerList;

  api_url: string;
  /*constructor(){
    this.list=[
     { Name:'abc', WaterMeterNo:123 , CustomerCode:123, PhoneNo:123 , Address:'abc', PreviousMR:123,PresentMR:234}
    ]*/
  constructor(private http: HttpClient) {
    this.api_url=environment.api_url;
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
   return this.http.get<CustomerList[]>(this.api_url);
 }

 public add(clist:CustomerList) : Observable<CustomerList>{
   return this.http.post<CustomerList>(this.api_url,clist);
 }

 public getById(waterMaterNo : number): Observable<CustomerList>{
   return this.http.get<CustomerList>(`${this.api_url}/${waterMaterNo}`);
 }
 public modify(clist:CustomerList): Observable<CustomerList>{
   return this.http.put<CustomerList>(this.api_url,clist);
 }
}
