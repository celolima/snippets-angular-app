import { empty, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AddressService } from 'src/app/shared/address/address.service';

import { CidadesBr } from './../models/cidades-br';
import { EstadosBr } from './../models/estado-br';
import { FormValidations } from '../utils/form-validations';
import { VerifyEmailServiceService } from './services/verifyEmailService.service';
import { distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';
import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';


@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent extends BaseFormComponent implements OnInit {

  // $states: Observable<EstadosBr[]>;

  states: EstadosBr[];

  cities: CidadesBr[];

  frameworksLabels = ['Angular', 'React', 'VueJs'];

  constructor(private formBuilder: FormBuilder,
              private addressService: AddressService,
              private verifyEmailService: VerifyEmailServiceService) {
              super();
              }

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

    // this.$states = this.addressService.getStates();

    this.addressService.getStates()
      .subscribe(dados => this.states = dados);

    this.formulario.get('endereco.cep').statusChanges
      .pipe(
        distinctUntilChanged(),
        switchMap(status => status === 'VALID' ?
          this.addressService.getCep(this.formulario.get('endereco.cep').value)
          : empty()
        )
      )
      .subscribe(dados => dados ? this.populaFormEndereco(dados) : {});

    this.formulario.get('endereco.estado').valueChanges
        .pipe(
          map(estado => this.states.find(e => e.sigla === estado)),
          switchMap((estado: EstadosBr) => this.addressService.getCities(estado.id)),
        ).subscribe(cidades => this.cities = cidades);

  }

  frameworksAsArray(): FormArray {
    return this.formulario.get('frameworks') as FormArray;
  }

  buildFrameworks(): FormArray {
    const values = this.frameworksLabels.map(v => new FormControl(false));
    return this.formBuilder.array(values, FormValidations.requiredMinCheckbox(1));
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

  submit(): void {
    console.log(this.formulario.value);
  }

  onSubmit(): void {
    super.onSubmit();
  }

}

