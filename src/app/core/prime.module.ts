import {NgModule} from "@angular/core";
import {GalleriaModule} from 'primeng/galleria';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {InputTextModule, ButtonModule, SliderModule,InputMaskModule} from 'primeng/primeng';
import {DialogModule} from 'primeng/dialog';
@NgModule({
  imports: [
    GalleriaModule, 
    AutoCompleteModule,
    InputTextModule, 
    ButtonModule,
    SliderModule,
    DialogModule,
    InputMaskModule 
  ],
  exports: [
    GalleriaModule, 
    AutoCompleteModule,
    InputTextModule, 
    ButtonModule,
    SliderModule,
    DialogModule,
    InputMaskModule
   ],
})
export class CustomPrimeModule { }