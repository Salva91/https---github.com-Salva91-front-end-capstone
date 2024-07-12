import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ILoginData } from '../../Models/i-login-data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginData: ILoginData = { username: '', password: '' };
  isLoggedIn: boolean = false;
  submitted: boolean = false;

  constructor(
    private authSvc: AuthService,
    private router: Router
  ) {}

  signIn() {
    this.submitted = true;
    if (!this.loginData.username || !this.loginData.password) {
      return;
    }
    this.authSvc.login(this.loginData).subscribe({
      next: () => {
        this.isLoggedIn = true;
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  logout() {
    this.isLoggedIn = false;
    this.loginData = { username: '', password: '' };
    this.router.navigate(['/login']);
  }
}
