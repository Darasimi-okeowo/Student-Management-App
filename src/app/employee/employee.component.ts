import { Component, OnInit } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  catchError,
  map,
  of,
  startWith,
} from 'rxjs';
import { ApiResponse } from '../interface/api-response';
import { Page } from '../interface/page';
import { HttpErrorResponse } from '@angular/common/http';
import { EmployeeService } from '../service/employee.service';
import { LogoutService } from '../service/logout.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
})
export class EmployeeComponent implements OnInit {
  employeeState$: Observable<{
    appState: string;
    appData?: ApiResponse<Page>;
    error?: HttpErrorResponse;
  }>;
  responseSubject = new BehaviorSubject<ApiResponse<Page>>(null);
  private currentPageSubject = new BehaviorSubject<number>(0);
  currentPage$ = this.currentPageSubject.asObservable();
  // loadingService: any;

  constructor(private employeeService: EmployeeService, private logoutService: LogoutService) {}

  ngOnInit(): void {
    // this.loadingService.loadingOn();
    this.employeeState$ = this.employeeService.employee$().pipe(
      map((response: ApiResponse<Page>) => {
        // this.loadingService.loadingOff();
        this.responseSubject.next(response);
        this.currentPageSubject.next(response.data.page.number);
        console.log(response);
        return { appState: 'APP_LOADED', appData: response };
      }),
      startWith({ appState: 'APP_LOADING' }),
      catchError((error: HttpErrorResponse) =>
        of({ appState: 'APP_ERROR', error })
      )
    );
  }

  goToPage(name?: string, pageNumber: number = 0): void {
    this.employeeState$ = this.employeeService.employee$(name, pageNumber).pipe(
      map((response: ApiResponse<Page>) => {
        this.responseSubject.next(response);
        this.currentPageSubject.next(pageNumber);
        console.log(response);
        return { appState: 'APP_LOADED', appData: response };
      }),
      startWith({
        appState: 'APP_LOADED',
        appData: this.responseSubject.value,
      }),
      catchError((error: HttpErrorResponse) =>
        of({ appState: 'APP_ERROR', error })
      )
    );
  }

  goToNextOrPreviousPage(direction?: string, name?: string): void {
    this.goToPage(
      name,
      direction === 'forward'
        ? this.currentPageSubject.value + 1
        : this.currentPageSubject.value - 1
    );
  }

  logout() {
    this.logoutService.logout();
  }
}
