import { Component } from '@angular/core';
import {AuthService} from "../firebase/services/auth.service";

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {
  constructor(private authService: AuthService) {

  }
  loginGoogle() {
    this.authService.loginGoogle();
  }
  loginGithub() {
    this.authService.loginGithub();
  }
  loginFacebook() {
    this.authService.loginFacebook();
  }
}
