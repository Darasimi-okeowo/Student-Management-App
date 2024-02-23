import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../interface/api-response';
import { Page } from '../interface/page';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private readonly serverUrl: string = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  // Make call to backend to retrieve list of user
  employee$ = (name: string = '', page: number = 0, size: number = 10): Observable<ApiResponse<Page>> =>
    this.http.get<ApiResponse<Page>>(`${this.serverUrl}/employee?name=${name}&page=${page}&size=${size}`)
  


  // getUser(name: string = '', page: number = 0, size: number = 10): Observable<ApiResponse<Page>>{
  //   return this.http.get<ApiResponse<Page>>(`${this.serverUrl}/users?name=${name}&page=${page}&size=${size}`)
  // }
}
