import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CidadesBr } from 'src/app/components/forms/models/cidades-br';
import { Endereco } from 'src/app/components/forms/models/hero';

import { EstadosBr } from './../../components/forms/models/estado-br';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient) { }

  getCep(value: string): Observable<any> {
    const cep = value.replace(/\D/g, '');
    const isValid = /^[0-9]{8}$/;

    if(!isValid) {
      throw new Error('Invalid CEP');
    }

    // template literal
    return this.http.get(`//viacep.com.br/ws/${cep}/json`).pipe();
  }

  getStates(): Observable<EstadosBr[]> {
    return this.http.get('/assets/address/estados.json').pipe(
      map((response: EstadosBr[]) => response as EstadosBr[]));
  }

  getCities(idState: number): Observable<CidadesBr[]> {
    return this.http.get('/assets/address/cidades.json').pipe(
      // map((response: CidadesBr[]) => response as CidadesBr[]));
      // tslint:disable-next-line: triple-equals
      map((cidades: CidadesBr[]) => cidades.filter(c => c.estado == idState)));
  }
}
