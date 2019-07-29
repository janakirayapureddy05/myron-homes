import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarouselSearchComponent } from './carousel-search/carousel-search.component';
import { MListComponent } from './m-list/m-list.component';
import { MpropdetailComponent } from './mpropdetail/mpropdetail.component';
import {LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { CompanyAdminComponent } from './company-admin/company-admin.component';
import {AdminComponent } from './admin/admin.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { MyronPageComponent } from './myron-page/myron-page.component';
import { ShortlstPropComponent } from './shortlst-prop/shortlst-prop.component';

const routes: Routes = [
  { path: '', redirectTo: '/msearch', pathMatch: 'full' },
  { path: 'msearch', component: CarouselSearchComponent },
  { path: 'mlist', component: MListComponent },
  { path: 'mpropdtl/:param1', component: MpropdetailComponent, },
  {path: 'login', component: LoginComponent},
  {path: 'user', component: UserComponent},
  {path: 'cadmin', component: CompanyAdminComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'cpswd', component: ChangePasswordComponent},
  {path: 'about', component: MyronPageComponent},
  {path: 'shrtlst', component: ShortlstPropComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
