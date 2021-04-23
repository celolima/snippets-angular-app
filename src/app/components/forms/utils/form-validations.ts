import { FormArray, FormControl, FormGroup } from '@angular/forms';

export class FormValidations {

  static requiredMinCheckbox(min = 1): any{
    const validator = (formArray: FormArray) => {
      const totalChecked = formArray.controls
        .map(v => v.value)
        .reduce((total, current) => current ? total + current : total, 0);
      return totalChecked >= min ? null : { require: true };
    };
    return validator;
  }

  static cepValidator(formControl: FormControl): any {
    const cep = formControl.value;
    if (cep && cep !== '') {
      const isValid = /^[0-9]{8}$/;
      return isValid.test(cep) ? null : { cepInvalido: true };
    }
    return null;
  }

  static equalsTo(otherField: string): any {
    const validator = (formControl: FormControl) => {

      // Validação para verificar se o formulário está pronto pelo Angular
      if (!formControl.root || !(formControl.root as FormGroup).controls) {
        return null;
      }

      if (otherField == null) {
        throw new Error('É necessário informar um campo');
      }

      const field = (formControl.root as FormGroup).get(otherField);

      if (!field) {
        throw new Error('É necessário informar um campo válido');
      }

      return field.value === formControl.value ? null : { equalsTo: true };

    };
    return validator;
  }

  static getErrorMsg(fieldName: string, validatorName: string, validatorValue?: any): string {

    const config = {
      required: `${fieldName} é obrigatório.`,
      minlength: `${fieldName} precisa ter no mínimo ${validatorValue.requiredLength} caracteres.`,
      maxlength: `${fieldName} precisa ter no máximo ${validatorValue.requiredLength} caracteres.`,
      cepInvalido: 'CEP inválido.',
      equalsTo: 'Os campos não são equivalentes'
    };

    return config[validatorName];
  }
}
