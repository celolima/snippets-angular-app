import { InputFieldComponent } from './input-field/input-field.component';
import { ErrorMsgComponent } from './error-msg/error-msg.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CamelCasePipe } from './camelcase-pipe/camel-case.pipe';
import { ColumnCardComponent } from './column-card/column-card.component';
import { FontFamilyStyleDirective } from './font-family-directive/font-family-style.directive';
import { ModalCookieComponent } from './modal-cookie/modal-cookie.component';


@NgModule({
  declarations: [ ColumnCardComponent,
    FontFamilyStyleDirective,
    ModalCookieComponent,
    CamelCasePipe,
    ErrorMsgComponent,
    InputFieldComponent
   ],
  imports: [
    CommonModule
  ],
  exports: [ ColumnCardComponent,
      FontFamilyStyleDirective,
      ModalCookieComponent,
      CamelCasePipe,
      ErrorMsgComponent,
      InputFieldComponent ]
})
export class SharedModule { }
