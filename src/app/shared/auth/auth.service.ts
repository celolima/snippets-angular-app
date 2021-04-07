import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isUserAuthenticate = false;

  showMenuEmitter = new EventEmitter<boolean>(); 

  constructor(private router: Router) { }

  login(user: User) {
    this._isUserAuthenticate = true;
    this.emitt();

    if(this._isUserAuthenticate) {
      this.router.navigate(['']);
    }
  }

  private emitt() {
    this.showMenuEmitter.emit(this._isUserAuthenticate);
  }

  logout() {
    this._isUserAuthenticate = false;
    this.emitt();
    this.router.navigate(['login']);
  }

  get isUserAuthenticate(): boolean {
    return this._isUserAuthenticate;
  }
}
