import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  // Khai báo các biến tương ứng với các trường dữ liệu trong form
  phone: string = '';
  password: string = '';
  retypePassword: string = '';
  fullName: string;
  address: string;
  dateOfBirth: Date;
  isAccepted: boolean;

  constructor() {
    this.phone = '';
    this.password = '';
    this.retypePassword = '';
    this.fullName = '';
    this.address = '';
    this.dateOfBirth = new Date();
    this.dateOfBirth.setFullYear(this.dateOfBirth.getFullYear() - 18);
    this.isAccepted = false;
  }

  onPhoneChange() {
    console.log(`phone typed: ${this.phone}`);
  }

  register() {
    const message =
      `phone: ${this.phone}` +
      `password: ${this.password}` +
      `retypePassword: ${this.retypePassword}` +
      `address: ${this.address}` +
      `fullName: ${this.fullName}` +
      `isAccepted: ${this.isAccepted}`;
    alert(message);
  }
}
