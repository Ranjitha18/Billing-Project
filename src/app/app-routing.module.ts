import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { CustomerSearchComponent } from './customer-search/customer-search.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  
  {path : '', component: AdminComponent},
  {path:'home',component :HomeComponent},
  {path : 'list/:msgCode/:consumerId', component:CustomerSearchComponent},
  {path : 'add', component:AddCustomerComponent},
  {path :'view/:consumerId', component:ViewComponent},
  {path : 'edit/:consumerId', component:AddCustomerComponent},
  {path : 'list', component:CustomerSearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
