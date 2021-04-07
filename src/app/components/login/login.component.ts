import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { User } from 'src/app/shared/auth/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = {login: '', password: ''};

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  logon() {
    this.authService.login(this.user);
  }

}