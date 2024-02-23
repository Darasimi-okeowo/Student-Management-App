import { Component, OnInit } from '@angular/core';
import { Student } from '../interface/student';
import { User } from '../interface/user';
import { Router } from '@angular/router';
import { LoginemployeeService } from '../service/loginemployee.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrl: './employee-login.component.css',
})
export class EmployeeLoginComponent implements OnInit {
  student: Student = new Student();
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessages: string;
  errorMessage: '';

  constructor(
    private loginemployeeService: LoginemployeeService,
    private router: Router
  ) {}
  ngOnInit(): void {}

  employeeLogin() {
    console.log(this.student);
    this.loginemployeeService.loginEmployee(this.student).subscribe(
      (loggedInEmployee: Student) => {
        this.student = loggedInEmployee;
        this.router.navigate(['/employee-dashboard']);
      },
      (error) => {
        this.errorMessage = error.message;
        this.errorMessages = 'Email or Password is incorrect';
        this.isSignUpFailed = true;
      }
    );
  }
}
