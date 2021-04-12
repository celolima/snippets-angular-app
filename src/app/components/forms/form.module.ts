import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DataFormComponent } from './data-form/data-form.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { FieldControlErrorComponent } from './utils/field-control-error/field-control-error.component';
import { FormDebugComponent } from './utils/form-debug/form-debug.component';

@NgModule({
  declarations: [ FormDebugComponent, HeroFormComponent, FieldControlErrorComponent, DataFormComponent ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeroFormComponent,
    DataFormComponent
  ]
})
export class FormModule { }
