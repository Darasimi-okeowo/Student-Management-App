import { Component } from '@angular/core';
import { Student } from '../interface/student';
import { LogoutService } from '../service/logout.service';
import { LoginstudentService } from '../service/loginstudent.service';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrl: './student-dashboard.component.css',
})
export class StudentDashboardComponent {
  currentUser: Student | null;

  constructor(
    private loginstudentService: LoginstudentService,
    private logoutService: LogoutService
  ) {}

  ngOnInit(): void {
    this.currentUser = this.loginstudentService.getCurrentStudent();
  }

  logout() {
    this.logoutService.logout();
  }
}
