import { Component, OnInit } from '@angular/core';
import { User } from '../interface/user';
import { LoginuserService } from '../service/loginuser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css',
})
export class UserLoginComponent implements OnInit {
  user: User = new User();
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessages: string;
  errorMessage: '';

  constructor(
    private loginuserService: LoginuserService,
    private router: Router
  ) {}
  ngOnInit(): void {}

  userLogin() {
    console.log(this.user);
    this.loginuserService.loginUser(this.user).subscribe(
      (loggedInUser: User) => {
        this.user = loggedInUser;
        const role = loggedInUser.role; // Assuming role is returned in the data
        if (role === 'ADMIN') {
          this.router.navigate(['/admin-dashboard']);
        } else if (role === 'USER') {
          this.router.navigate(['/user-dashboard']);
        } else {
          this.errorMessages = 'Invalid role';
          this.isSignUpFailed = true;
        }
      },
      (error) => {
        this.errorMessage = error.message;
        this.errorMessages = 'Email or Password is incorrect';
        this.isSignUpFailed = true;
      }
    );
  }


}
