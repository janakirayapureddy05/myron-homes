import {NgModule} from '@angular/core';
import {GalleriaModule} from 'primeng/galleria';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {InputTextModule, InputSwitchModule, DropdownModule, ButtonModule,
  SliderModule, InputMaskModule, RadioButtonModule, ToggleButtonModule} from 'primeng/primeng';
import {DialogModule} from 'primeng/dialog';
import {DataViewModule} from 'primeng/dataview';
import {TableModule} from 'primeng/table';
import {TreeTableModule} from 'primeng/treetable';
import {FileUploadModule} from 'primeng/fileupload';
import {GMapModule} from 'primeng/gmap';
import {CheckboxModule} from 'primeng/checkbox';
import {AccordionModule} from 'primeng/accordion';
import {CardModule} from 'primeng/card';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ToastModule} from 'primeng/toast';
import {FieldsetModule} from 'primeng/fieldset';
import {SidebarModule} from 'primeng/sidebar';
import {TieredMenuModule} from 'primeng/tieredmenu';
@NgModule({
  imports: [
    GalleriaModule,
    AutoCompleteModule,
    InputTextModule,
    ButtonModule,
    SliderModule,
    DialogModule,
    InputMaskModule,
    RadioButtonModule,
    DataViewModule,
    DropdownModule,
    TreeTableModule,
    TableModule,
    InputSwitchModule,
    ToggleButtonModule,
    FileUploadModule,
    GMapModule,
    CheckboxModule,
    AccordionModule,
    CardModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    FieldsetModule,
    SidebarModule,
    TieredMenuModule
  ],
  exports: [
    GalleriaModule,
    AutoCompleteModule,
    InputTextModule,
    ButtonModule,
    SliderModule,
    DialogModule,
    InputMaskModule,
    RadioButtonModule,
    DataViewModule,
    DropdownModule,
    TreeTableModule,
    TableModule,
    InputSwitchModule,
    ToggleButtonModule,
    FileUploadModule,
    GMapModule,
    CheckboxModule,
    AccordionModule,
    CardModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    FieldsetModule,
    SidebarModule,
    TieredMenuModule
   ],
})
export class CustomPrimeModule { }
