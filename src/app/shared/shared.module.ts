import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColumnCardComponent } from './column-card/column-card.component';
import { FontFamilyStyleDirective } from './font-family-directive/font-family-style.directive';
import { LogService } from './log-service/log.service';
import { ModalCookieComponent } from './modal-cookie/modal-cookie.component';
import { CamelCasePipe } from './camelcase-pipe/camel-case.pipe';



@NgModule({
  declarations: [ ColumnCardComponent, FontFamilyStyleDirective, ModalCookieComponent, CamelCasePipe ],
  imports: [
    CommonModule
  ], 
  exports: [ ColumnCardComponent, FontFamilyStyleDirective, ModalCookieComponent, CamelCasePipe ],
  providers: [ LogService ]
})
export class SharedModule { }
