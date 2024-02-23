import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../interface/student';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private readonly serverUrl: string = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  public getStudents(): Observable<Student[]>{
    return this.http.get<Student[]>(`${this.serverUrl}/student/all`);
  }

  public addStudent(student: Student): Observable<Student>{
    return this.http.post<Student>(`${this.serverUrl}/student/add`, student);
  }

  public updateStudent(student: Student): Observable<Student>{
    return this.http.put<Student>(`${this.serverUrl}/student/update`, student);
  }

  public deleteStudent(studentId: number): Observable<void>{
    return this.http.delete<void>(`${this.serverUrl}/student/delete/${studentId}`);
  }
}
