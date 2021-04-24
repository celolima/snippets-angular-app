import { empty, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AddressService } from 'src/app/shared/address/address.service';

import { CidadesBr } from './../models/cidades-br';
import { EstadosBr } from './../models/estado-br';
import { FormValidations } from '../utils/form-validations';
import { VerifyEmailServiceService } from './services/verifyEmailService.service';
import { distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';


@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;

  $states: Observable<EstadosBr[]>;

  cities: CidadesBr[];

  frameworksLabels = ['Angular', 'React', 'VueJs'];

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

    this.formulario.get('endereco.cep').statusChanges
      .pipe(
        distinctUntilChanged(),
        switchMap(status => status === 'VALID' ?
          this.addressService.getCep(this.formulario.get('endereco.cep').value)
          : empty()
        )
      )
      .subscribe(dados => dados ? this.populaFormEndereco(dados) : {});

  }

  frameworksAsArray(): FormArray {
    return this.formulario.get('frameworks') as FormArray;
  }

  buildFrameworks(): FormArray {
    const values = this.frameworksLabels.map(v => new FormControl(false));
    return this.formBuilder.array(values, FormValidations.requiredMinCheckbox(1));
  }

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

  getCep(): void {
    this.addressService.getCep(this.formulario.get('endereco.cep').value).subscribe((dados: any) => {
      this.populaFormEndereco(dados);
    });
  }

  private populaFormEndereco(dados: any): void {
    this.formulario.get('endereco.rua').setValue(dados.logradouro);
    this.formulario.get('endereco.bairro').setValue(dados.bairro);
    this.formulario.get('endereco.cidade').setValue(dados.localidade);
    this.formulario.get('endereco.estado').setValue(dados.uf);
  }

  verificaExistenciaEmail(formControl: FormControl): any {
    return this.verifyEmailService.verifyEmail(formControl.value)
      .pipe(
        map(existeEmail => existeEmail ? { jaExiste: true } : null)
      );
  }

  onSubmit(): void {
    if (this.formulario.valid) {
      console.log(this.formulario.value);
    }
  }

}

