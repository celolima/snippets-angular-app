import { Component, OnInit } from '@angular/core';
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

  constructor(private herosService: HerosService) { this.model = new Hero(); }

  async ngOnInit() {
    this.powers = await this.herosService.getPowers();    
  }

  onSubmit() { 
    this.submitted = true; 
    
    this.herosService.addHero(this.model);        
  }

  newHero() {
    this.model = new Hero(42, '', '');
  }

}
