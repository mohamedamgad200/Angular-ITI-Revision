import { Component } from '@angular/core';
import { UserAuthService } from '../../services/user-auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  isUserLogged: boolean;
  constructor(private userAuthenticationService: UserAuthService) {
    this.isUserLogged = this.userAuthenticationService.getUserLogged();
  }
  login() {
    this.userAuthenticationService.login();
    this.isUserLogged = this.userAuthenticationService.getUserLogged();
  }

  logout() {
    this.userAuthenticationService.logout();
    this.isUserLogged = this.userAuthenticationService.getUserLogged();
  }
}
