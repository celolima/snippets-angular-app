import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from './shared/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {
  
  showMenu: boolean = false;

  constructor(private authService: AuthService) {

  }

  logout() {
    this.authService.logout();
  }

  ngOnInit(): void {
    this.authService.showMenuEmitter.subscribe((show) => this.showMenu = show);
  }

  ngOnDestroy(): void {
    this.authService.showMenuEmitter.unsubscribe();
  }

}
