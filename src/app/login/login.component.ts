import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginDTO } from '../dtos/user/login.dtos';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  @ViewChild('loginForm') loginForm!: NgForm;
  phone: string = '';
  password: string = '';

  constructor(private router: Router, private userService: UserService) {
    this.phone = '';
    this.password = '';
  }

  onPhoneChange() {
    console.log(`phone typed: ${this.phone}`);
  }

  login() {
    const loginDTO: LoginDTO = {
      phone_number: this.phone,
      password: this.password,
    };

    this.userService.login(loginDTO).subscribe({
      next: (response: any) => {
        debugger;
      },
      complete: () => {
        debugger;
      },
      error: (error: any) => {
        debugger;
        alert(`Can't login, error:${error.error}`);
        console.log(error);
      },
    });
  }
}
