import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MsearchComponent } from './msearch/msearch.component';
import { MListComponent } from './m-list/m-list.component';
import { MpropdetailComponent } from './mpropdetail/mpropdetail.component';

const routes: Routes = [
  { path: '', redirectTo: '/msearch', pathMatch: 'full' },
  { path: 'msearch', component: MsearchComponent },
  { path: 'mlist', component: MListComponent },
  { path: 'mpropdtl', component: MpropdetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
