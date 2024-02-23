import { Component, OnInit } from '@angular/core';
import { User } from '../interface/user';
import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.css',
})
export class RegisterUserComponent implements OnInit {
  user: User = new User();
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  errorMessages: string;


  constructor(private registerService: RegisterService) {}
  ngOnInit(): void {}

  userRegister() {
    console.log(this.user);
    this.registerService.registerUser(this.user).subscribe((data) => {
      alert('Registration Successful');
    },error => {
      this.errorMessage = error.message;
      this.errorMessages = 'Email already exists';
      this.isSignUpFailed = true;
    }
);
    }
}