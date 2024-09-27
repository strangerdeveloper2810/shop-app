import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginDTO } from '../../dtos/user/login.dtos';
import { UserService } from 'src/app/services/user.service';
import { LoginResponse } from 'src/app/response/LoginResponse';
import { TokenService } from 'src/app/services/token.service';
import { RolesService } from 'src/app/services/role.service';
import { Role } from 'src/app/models/role';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  @ViewChild('loginForm') loginForm!: NgForm;
  phone: string = '';
  password: string = '';
  roles: Role[] = [];
  rememberMe: boolean = true;
  selectedRole: Role | undefined;

  constructor(
    private router: Router,
    private userService: UserService,
    private tokenService: TokenService,
    private rolesService: RolesService
  ) {
    this.phone = '';
    this.password = '';
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    //Call api lấy danh sách roles lưu vào biến roles
    debugger;
    this.rolesService.getRoles().subscribe({
      next: (roles: Role[]) => {
        console.log('Roles received:', roles); // Log để kiểm tra dữ liệu
        this.roles = roles;

        // Set "user" (id: 1) as the default selected role
        this.selectedRole = roles.find((role) => role.id === 1) || roles[0];
      },
      error: (error: any) => {
        console.error(`Error getting roles`, error);
      },
    });
  }

  onPhoneChange() {
    console.log(`phone typed: ${this.phone}`);
  }

  login() {
    const loginDTO: LoginDTO = {
      phone_number: this.phone,
      password: this.password,
      role_id: this.selectedRole?.id ?? 1,
    };

    this.userService.login(loginDTO).subscribe({
      next: (response: LoginResponse) => {
        debugger;
        const { token } = response;
        if (this.rememberMe) {
          this.tokenService.setToken(token);
        }
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
