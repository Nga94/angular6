import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataTableModule } from "angular-6-datatable";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// khai bao cho app.modul biet component cua minh
import { UserComponent } from './component/user/user.component';
import { DetailComponent } from './component/Detail/detail.component';
import {UserService} from './component/User/user.service'


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTableModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
