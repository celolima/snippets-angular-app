import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HerosService {

  private powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  constructor() { }

  getPowers(): Promise<string[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(this.powers), 1000);
    });
  }
}
