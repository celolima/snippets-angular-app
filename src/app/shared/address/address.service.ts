import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Endereco } from 'src/app/components/forms/hero';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient) { }

  getCep(value: string) {
    const cep = value.replace(/\D/g, '');
    const isValid = /^[0-9]{8}$/;

    if(!isValid) {
      throw new Error('Invalid CEP');
    }

    let address: Endereco;

    // template literal
    return this.http.get(`//viacep.com.br/ws/${cep}/json`).pipe();
  }
}
