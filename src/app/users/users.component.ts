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
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  usersState$: Observable<{
    appState: string;
    appData?: ApiResponse<Page>;
    error?: HttpErrorResponse;
  }>;
  responseSubject = new BehaviorSubject<ApiResponse<Page>>(null);
  private currentPageSubject = new BehaviorSubject<number>(0);
  currentPage$ = this.currentPageSubject.asObservable();
  // loadingService: any;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // this.loadingService.loadingOn();
    this.usersState$ = this.userService.users$().pipe(
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
    this.usersState$ = this.userService.users$(name, pageNumber).pipe(
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
    this.goToPage(name, direction === 'forward' ? this.currentPageSubject.value + 1 : this.currentPageSubject.value - 1);
  }
}
