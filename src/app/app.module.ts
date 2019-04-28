import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { JwSocialButtonsModule } from 'jw-angular-social-buttons';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';
import { CustomPrimeModule } from "./core/prime.module";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MListComponent } from './m-list/m-list.component';
import { MpropdetailComponent } from './mpropdetail/mpropdetail.component';
import { SearchComponent } from './search/search.component';
import { CarouselSearchComponent } from './carousel-search/carousel-search.component';
import { IndianCurrency } from "./pipes/currency.pipe";
import { PagerService, CommonService } from './services/index';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AlertComponent } from './alert/alert.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    MListComponent,
    MpropdetailComponent,
    SearchComponent,
    CarouselSearchComponent,
    IndianCurrency,
    LoginComponent,
    UserComponent,
    AlertComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    JwSocialButtonsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAeU4cfkrY8pf7Kg9UqfQ12RoD1Fnvch4o'
    }),
    CustomPrimeModule
    ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    PagerService,
    CommonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
