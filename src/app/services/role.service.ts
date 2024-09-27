import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterDTO } from 'src/app/dtos/user/register.dto';
import { environments } from 'src/app/environments';

@Injectable({
  providedIn: 'root',
})
export class RolesService {
  private apiRole = {
    getRoles: `${environments.apiBaseUrl}/roles`,
  };

  private apiConfig = {
    headers: this.createHeaders(),
  };

  constructor(private htttp: HttpClient) {}
  private createHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept-Language': 'vi',
    });
  }

  getRoles(): Observable<any> {
    return this.htttp.get<any[]>(this.apiRole.getRoles);
  }
}
