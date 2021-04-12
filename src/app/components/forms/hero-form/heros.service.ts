import { Hero } from './../models/hero';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HerosService {

  private powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  private heros: Hero[] = [];

  constructor() { }

  getPowers(): Promise<string[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(this.powers), 1000);
    });
  }

  addHero(hero: Hero): void {
    this.heros.push(hero);
  }
}
