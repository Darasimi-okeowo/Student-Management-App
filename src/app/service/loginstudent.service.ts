import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Student } from '../interface/student';

@Injectable({
  providedIn: 'root'
})
export class LoginstudentService {

  private readonly serverUrl: string = 'http://localhost:8080/student/login';


  constructor(private http: HttpClient) { }

  loginStudent(user: Student): Observable<Student> {
    return this.http.post<Student>(this.serverUrl, user)
      .pipe(
        tap((loggedInStudent: Student) => {
          if (typeof window !== 'undefined') {
            window.sessionStorage.setItem('loggedStudent', JSON.stringify(loggedInStudent));
          }
        })
      );
  }

  getCurrentStudent(): Student | null {
    if (typeof window !== 'undefined') {
      const storedStudent = window.sessionStorage.getItem('loggedStudent');
      return storedStudent ? JSON.parse(storedStudent) : null;
    }
    return null;
  }
}
