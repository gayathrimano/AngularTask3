import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {AuthService } from './auth.service';
import {DataService} from './data.service';
import { Component, OnInit } from '@angular/core';
import {LogdataService} from './logdata.service';
import { StorageServiceModule} from 'angular-webstorage-service';
import { CookieService } from 'ngx-cookie-service';
import { TestComponent } from './test/test.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StorageServiceModule,
    FormsModule,
    RouterModule.forRoot([
{
path:'login',
component:LoginComponent

},
{
path:'admin',
component:AdminComponent
},

{
  path:'test',
  component:TestComponent
  },
{
  path:'',
  component:HomeComponent
}
    ])
  ],
  providers: [AuthService,DataService,LogdataService,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
