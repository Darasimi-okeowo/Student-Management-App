import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interface/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private readonly serverUrl: string = 'http://localhost:8080/user/register';

  constructor(private http: HttpClient) {}

  registerUser(user: User): Observable<Object> {
    console.log(user);
    return this.http.post(`${this.serverUrl}`,user)
  }
}
