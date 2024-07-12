import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
import { ILoginData } from '../../Models/i-login-data';
import { Router } from '@angular/router';
import { IUser } from '../../Models/i-user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})

export class RegisterComponent {
  registerData: Partial<IUser> = {
    roles: [],
  };
  registerDataAdmin: Partial<IUser> = {
    roles: [],
  };

  admin: boolean = false;
  warehouse: boolean = false;

  constructor(private AuthSvc: AuthService, private router: Router) {}

  signUp() {
    this.AuthSvc.register(this.registerData).subscribe({
      next: (data) => this.router.navigate(['/auth/login']),
      error: (error) => console.error('Error during user registration:', error)
    });
  }

  signUpAdmin() {
    if (this.admin && this.warehouse) {
      this.registerDataAdmin.roles?.push({ roleType: "WAREHOUSE" });
    } else if (this.admin) {
      this.registerDataAdmin.roles?.push({ roleType: "ADMIN" });
    }

    this.AuthSvc.register(this.registerDataAdmin).subscribe({
      next: (data) => this.router.navigate(['/auth/login']),
      error: (error) => console.error('Error during admin registration:', error)
    });
  }
}
