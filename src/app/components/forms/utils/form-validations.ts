import { FormArray, FormControl, FormGroup } from "@angular/forms";

export class FormValidations {

  static requiredMinCheckbox(min = 1) {
    const validator = (formArray: FormArray) => {
      const totalChecked = formArray.controls
        .map(v => v.value)
        .reduce((total, current) => current ? total + current : total, 0);
        return totalChecked >= min ? null : { require: true };
    };
    return validator;
  }

  static cepValidator(formControl: FormControl) {
    const cep = formControl.value;
    if(cep && cep !== '') {
      const isValid = /^[0-9]{8}$/;
      return isValid.test(cep) ? null : { cepInvalido: true };
    }
    return null;
  }

  static equalsTo(otherField: string) {
    const validator = (formControl: FormControl) => {

      // Validação para verificar se o formulário está pronto pelo Angular
      if(!formControl.root || !(<FormGroup> formControl.root).controls) {
        return null;
      }

      if(otherField == null) {
        throw new Error('É necessário informar um campo');
      }

      const field = (<FormGroup> formControl.root).get(otherField);

      if(!field) {
        throw new Error('É necessário informar um campo válido');
      }

      return field.value === formControl.value ? null : { equalsTo: true };

    };
    return validator;
  }
}
