import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AddressService } from 'src/app/shared/address/address.service';

import { CidadesBr } from './../models/cidades-br';
import { EstadosBr } from './../models/estado-br';
import { FormValidations } from '../utils/form-validations';
import { VerifyEmailServiceService } from './services/verifyEmailService.service';
import { map, tap } from 'rxjs/operators';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;

  $states: Observable<EstadosBr[]>;

  cities: CidadesBr[];

  frameworksLabels = ['Angular','React','VueJs'];

  constructor(private formBuilder: FormBuilder,
    private addressService: AddressService,
    private verifyEmailService: VerifyEmailServiceService) { }

  ngOnInit(): void {

    // Generates via builder, syntax sugar
    this.formulario = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: [null, [Validators.required, Validators.email], this.verificaExistenciaEmail.bind(this)],
      emailConfirmation: [null, [Validators.required, Validators.email, FormValidations.equalsTo('email')]],

      endereco: this.formBuilder.group({
        cep: [null, [Validators.required, FormValidations.cepValidator]],
        numero: [null],
        complemento: [null],
        rua: [{value: null, disabled: false}, Validators.required],
        bairro: [{value: null, disabled: false}, Validators.required],
        cidade: [{value: null, disabled: false}, Validators.required],
        estado: [{value: null}, Validators.required],
      }),

      frameworks: this.buildFrameworks()

    });

    this.$states = this.addressService.getStates();

    this.addressService.getCities('0').subscribe((data) => {
      console.log(data[0]);
    });
  }

  frameworksAsArray() {
    return this.formulario.get('frameworks') as FormArray;
  }

  buildFrameworks() {
    const values = this.frameworksLabels.map(v => new FormControl(false));
    return this.formBuilder.array(values, FormValidations.requiredMinCheckbox(1));
  }

  fieldRequired(field: string) {
    return this.formulario.get(field).hasError('required') &&
      (this.formulario.get(field).touched || this.formulario.get(field).dirty);
  }

  fieldHasError(field: string) {
    return !this.fieldRequired(field) &&
      !this.formulario.get(field).valid &&
      this.formulario.get(field).touched;
  }

  fieldRequiredMsg(field: string) {
    return `This field has error`;
  }

  getCep() {
    this.addressService.getCep(this.formulario.get('endereco.cep').value).subscribe((dados: any) => {
      this.formulario.get('endereco.rua').setValue(dados.logradouro);
      this.formulario.get('endereco.bairro').setValue(dados.bairro);
      this.formulario.get('endereco.cidade').setValue(dados.localidade);
      this.formulario.get('endereco.estado').setValue(dados.uf);
    });
  }

  verificaExistenciaEmail(formControl: FormControl) {
    return this.verifyEmailService.verifyEmail(formControl.value)
      .pipe(
        map(existeEmail => existeEmail ? { jaExiste: true } : null)
      );
  }

  onSubmit() {
    if(this.formulario.valid) {
      console.log(this.formulario.value);
    }
  }

}

