import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interface/user';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoginuserService {
  private readonly serverUrl: string = 'http://localhost:8080/user/login';

  constructor(private http: HttpClient) {}

  // loginUser(user: User): Observable<Object> {
  //   console.log(user);
  //   return this.http.post(`${this.serverUrl}`, user);
  // }

  loginUser(user: User): Observable<User> {
    return this.http.post<User>(this.serverUrl, user)
      .pipe(
        tap((loggedInUser: User) => {
          if (typeof window !== 'undefined') {
            window.sessionStorage.setItem('loggedUser', JSON.stringify(loggedInUser));
          }
        })
      );
  }

  getCurrentUser(): User | null {
    if (typeof window !== 'undefined') {
      const storedUser = window.sessionStorage.getItem('loggedUser');
      return storedUser ? JSON.parse(storedUser) : null;
    }
    return null;
  }
}
