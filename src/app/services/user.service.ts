import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginDTO } from 'src/app/dtos/user/login.dtos';
import { RegisterDTO } from 'src/app/dtos/user/register.dto';
import { environments } from 'src/app/environments';
import { HttpUtilService } from './http.util.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiAuth = {
    register: `${environments.apiBaseUrl}/users/register`,
    login: `${environments.apiBaseUrl}/users/login`,
  };

  private apiConfig = {
    headers: this.httpUtilService.createHeaders(),
  };

  constructor(
    private htttp: HttpClient,
    private httpUtilService: HttpUtilService
  ) {}

  register(registerDTO: RegisterDTO): Observable<any> {
    return this.htttp.post(this.apiAuth.register, registerDTO, this.apiConfig);
  }

  login(loginDTO: LoginDTO): Observable<any> {
    return this.htttp.post(this.apiAuth.login, loginDTO, this.apiConfig);
  }
}
