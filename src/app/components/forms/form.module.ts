import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDebugComponent } from './utils/form-debug/form-debug.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { FormsModule } from '@angular/forms';
import { FieldControlErrorComponent } from './utils/field-control-error/field-control-error.component';

@NgModule({
  declarations: [ FormDebugComponent, HeroFormComponent, FieldControlErrorComponent ],
  imports: [
    CommonModule,
    FormsModule
  ], 
  exports: [
    HeroFormComponent
  ]
})
export class FormModule { }
