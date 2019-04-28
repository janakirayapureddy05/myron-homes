import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarouselSearchComponent } from './carousel-search/carousel-search.component';
import { MListComponent } from './m-list/m-list.component';
import { MpropdetailComponent } from './mpropdetail/mpropdetail.component';
import {LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', redirectTo: '/msearch', pathMatch: 'full' },
  { path: 'msearch', component: CarouselSearchComponent },
  { path: 'mlist', component: MListComponent },
  { path: 'mpropdtl', component: MpropdetailComponent },
  {path: 'login', component:LoginComponent},
  {path: 'user', component:UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
