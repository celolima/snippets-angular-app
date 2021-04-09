import { Component, OnInit } from '@angular/core';
import { AddressService } from 'src/app/shared/address/address.service';
import { Hero } from '../hero';
import { HerosService } from './heros.service';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  powers: string[] = [];

  model: Hero;

  submitted = false;

  constructor(private herosService: HerosService,
    private addressService: AddressService) { this.newHero(); }

  async ngOnInit() {
    this.powers = await this.herosService.getPowers();    
  }

  onSubmit() { 
    this.submitted = true; 
    
    this.herosService.addHero(this.model);
  }

  newHero() {
    this.model = {endereco: {cep: '',numero: 0,complemento: '', rua: '', bairro: '', cidade: '', estado: ''} };
  }

  fieldHasError(field) {
    return field.invalid && field.dirty;
  }

  fieldRequiredMsg(field) {
    return `${field.name} is required`;
  }

  getCep() {
    this.addressService.getCep(this.model.endereco.cep).subscribe((dados: any) => {
      this.model.endereco = {
        cep: dados.cep,
        numero: 0,
        complemento: '',
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf,
        rua: dados.localidade
      };
    });
  }

}
