import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailComponent } from './component/Detail/detail.component';
import { UserComponent } from './component/user/user.component';

const routes: Routes = [
  { path: "detail/:id", component: DetailComponent },
  { path: "", component: UserComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
