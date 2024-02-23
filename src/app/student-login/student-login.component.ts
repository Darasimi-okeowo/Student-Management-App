import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../interface/student';
import { LoginstudentService } from '../service/loginstudent.service';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrl: './student-login.component.css'
})
export class StudentLoginComponent implements OnInit{
  student: Student = new Student();
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessages: string;
  errorMessage: '';

  constructor(
    private loginstudentService: LoginstudentService,
    private router: Router
  ) {}
  ngOnInit(): void {}

  studentLogin() {
    console.log(this.student);
    this.loginstudentService.loginStudent(this.student).subscribe(
      (loggedInStudent: Student) => {
        this.student = loggedInStudent;
        this.router.navigate(['/student-dashboard']);
      },
      (error) => {
        this.errorMessage = error.message;
        this.errorMessages = 'Email or Password is incorrect';
        this.isSignUpFailed = true;
      }
    );
  }
}
