import { Component } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-base-form',
  template: '<div></div>'
})
export abstract class BaseFormComponent {

  formulario: FormGroup;

  constructor() { }

  fieldRequired(field: string): boolean {
    return this.formulario.get(field).hasError('required') &&
      (this.formulario.get(field).touched || this.formulario.get(field).dirty);
  }

  fieldHasError(field: string): boolean {
    return !this.fieldRequired(field) &&
      !this.formulario.get(field).valid &&
      this.formulario.get(field).touched;
  }

  fieldRequiredMsg(field: string): string {
    return `This field has error`;
  }

  getField(field: string): AbstractControl {
    return this.formulario.get(field);
  }

  abstract submit(): void;

  onSubmit(): void {
    if (this.formulario.valid) {
      this.submit();
    }
  }

  reset(): void {
    this.formulario.reset();
  }

}
