import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AddressService } from 'src/app/shared/address/address.service';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private addressService: AddressService) { }

  ngOnInit(): void {

    // Generates via builder, syntax sugar
    this.formulario = this.formBuilder.group({
      name: [null, [Validators.required, Validators.min(3), Validators.max(20)]],
      email: [null, [Validators.required, Validators.email]],

      endereco: this.formBuilder.group({
        cep: [null],
        numero: [null],
        complemento: [null],
        rua: [{value: null, disabled: true}, Validators.required],
        bairro: [{value: null, disabled: true}, Validators.required],
        cidade: [{value: null, disabled: true}, Validators.required],
        estado: [{value: null, disabled: true}, Validators.required]
      })
      
    });
  }

  fieldHasError(field: string) {
    return !this.formulario.get(field).valid && 
      this.formulario.get(field).touched;
  }

  fieldRequiredMsg(field: string) {
    // return this.formulario.get(field)?.errors['email'] 
    //   ? `${field} is invalid` 
    //   : `${field} is required`;
    return `${field} is invalid`;
  }

  getCep() {  
    
    this.addressService.getCep(this.formulario.get('endereco.cep').value).subscribe((dados: any) => {
      this.formulario.get('endereco.rua').setValue(dados.logradouro);
      this.formulario.get('endereco.bairro').setValue(dados.bairro);
      this.formulario.get('endereco.cidade').setValue(dados.localidade);
      this.formulario.get('endereco.estado').setValue(dados.uf);
    });
  }

  onSubmit() {
    if(this.formulario.valid) {
      console.log(this.formulario.value);
    }    
  }

}

