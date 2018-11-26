import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// khai bao cho app.modul biet component cua minh
import { HocsinhComponent } from './component/Hocsinh/hocsinh.component';
import { KhoahocComponent } from './component/Khoahoc/khoahoc.component';
import { CasiComponent } from './casi/casi.component'
import { NhanvienComponent } from './component/Nhanvien/nhanvien.component';
import { UserComponent } from './component/user/user.component';
import { DataTableModule } from "angular-6-datatable";
import { ModalDialogModule } from 'ngx-modal-dialog';


@NgModule({
  declarations: [
    AppComponent,
    HocsinhComponent,
    KhoahocComponent,
    CasiComponent,
    NhanvienComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTableModule,
    ModalDialogModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
