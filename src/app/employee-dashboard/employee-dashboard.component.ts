import { Component, OnInit } from '@angular/core';
import { Student } from '../interface/student';
import { LoginemployeeService } from '../service/loginemployee.service';
import { LogoutService } from '../service/logout.service';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrl: './employee-dashboard.component.css',
})
export class EmployeeDashboardComponent implements OnInit {
  currentUser: Student | null;

  constructor(
    private loginemployeeService: LoginemployeeService,
    private logoutService: LogoutService
  ) {}

  ngOnInit(): void {
    this.currentUser = this.loginemployeeService.getCurrentEmployee();
  }

  logout() {
    this.logoutService.logout();
  }
}
