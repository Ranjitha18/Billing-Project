import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { CustomerSearchComponent } from './customer-search/customer-search.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { ViewComponent } from './view/view.component';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { MessageBoxComponent } from './message-box/message-box.component'
import{Ng2SearchPipeModule} from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    AdminComponent,
    HomeComponent,
    CustomerSearchComponent,
    AddCustomerComponent,
    ViewComponent,
    MessageBoxComponent,
    
  ],
  imports: [
    BrowserModule,  
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
