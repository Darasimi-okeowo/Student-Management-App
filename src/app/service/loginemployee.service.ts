import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../interface/student';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginemployeeService {
  private readonly serverUrl: string = 'http://localhost:8080/student/login';


  constructor(private http: HttpClient) { }

  loginEmployee(user: Student): Observable<Student> {
    return this.http.post<Student>(this.serverUrl, user)
      .pipe(
        tap((loggedInEmployee: Student) => {
          if (typeof window !== 'undefined') {
            window.sessionStorage.setItem('loggedEmployee', JSON.stringify(loggedInEmployee));
          }
        })
      );
  }

  getCurrentEmployee(): Student | null {
    if (typeof window !== 'undefined') {
      const storedEmployee = window.sessionStorage.getItem('loggedEmployee');
      return storedEmployee ? JSON.parse(storedEmployee) : null;
    }
    return null;
  }
}
