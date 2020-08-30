import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { CustomerSearchComponent } from './customer-search/customer-search.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { ViewComponent } from './view/view.component';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { MessageBoxComponent } from './message-box/message-box.component'
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule} from '@angular/material/toolbar';
 import { MatMenuModule}  from '@angular/material/Menu';
   import     { MatIconModule} from '@angular/material/Icon';
    import    { MatTableModule} from '@angular/material/Table';
      import{MatDividerModule} from '@angular/material/divider';
       import  {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
       import { MatSlideToggleModule} from '@angular/material/slide-toggle';
       import  {MatSelectModule} from '@angular/material/select';
       

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
    Ng2FilterPipeModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
     MatMenuModule,
     MatIconModule,
     MatTableModule,
     MatDividerModule,
     MatProgressSpinnerModule,
    MatSlideToggleModule,
     MatSelectModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
