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
    this.model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  }

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}
