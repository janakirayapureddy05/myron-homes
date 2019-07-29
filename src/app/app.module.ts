import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { JwSocialButtonsModule } from 'jw-angular-social-buttons';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';
import { CustomPrimeModule } from './common/core/prime.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TagInputModule } from 'ngx-chips';
import {MessageService} from 'primeng/api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MListComponent } from './m-list/m-list.component';
import { MpropdetailComponent } from './mpropdetail/mpropdetail.component';
import { SearchComponent } from './common/components/search/search.component';
import { CarouselSearchComponent } from './carousel-search/carousel-search.component';
import { PagerService, CommonService, HttpService } from './common/services/index';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AlertComponent } from './common/components/alert/alert.component';
import { RegisterComponent } from './register/register.component';
import { RecaptchaModule, RECAPTCHA_SETTINGS, RecaptchaSettings } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';

import { IndianCurrency } from './common/pipes/currency.pipe';
import { SearchPipe } from './common/pipes/search.pipe';
import { SafePipe } from './common/pipes/safe.pipe';
import { WhiteSpacePipe } from './common/pipes/whiteSpace.pipe';
import { CompanyAdminComponent } from './company-admin/company-admin.component';
import { PropertyListComponent } from './common/components/property-list/property-list.component';
import { AdminComponent } from './admin/admin.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { MailComponent } from './common/components/mail/mail.component';
import { AddPropertyComponent } from './add-property/add-property.component';
import { MyronPageComponent } from './myron-page/myron-page.component';
import { ShortlstPropComponent } from './shortlst-prop/shortlst-prop.component';
import { NewPropertysComponent } from './common/components/new-propertys/new-propertys.component';
import { MockService } from './common/services/mock.service';

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
    RegisterComponent,
    SearchPipe,
    CompanyAdminComponent,
    PropertyListComponent,
    AdminComponent,
    ChangePasswordComponent,
    MailComponent,
    AddPropertyComponent,
    SafePipe,
    WhiteSpacePipe,
    MyronPageComponent,
    ShortlstPropComponent,
    NewPropertysComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    JwSocialButtonsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDXpkk7KXg5YmtMN1GfAl5aRxPQpFQj77Y'
    }),
    CustomPrimeModule,
    ReactiveFormsModule,
    HttpClientModule,
    TagInputModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    PagerService,
    CommonService,
    HttpService,
    MockService,
    MessageService,
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: '6Le4sqwUAAAAAGqWY92PHNj6yPCI2FaHAr83BdTs',
      } as RecaptchaSettings,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
