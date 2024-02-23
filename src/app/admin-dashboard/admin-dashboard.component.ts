import { Component, OnInit } from '@angular/core';
import { User } from '../interface/user';
import { LoginuserService } from '../service/loginuser.service';
import { LogoutService } from '../service/logout.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent implements OnInit{
  currentUser: User | null;

  constructor(private loginuserService: LoginuserService,private logoutService: LogoutService) { }

  ngOnInit(): void {
    this.currentUser = this.loginuserService.getCurrentUser();
  }

  generateUrlForStudents(): string {
    const role = this.loginuserService.getCurrentUser().role.toLowerCase();
    return `/${role}/students`;
  }

  logout() {
    this.logoutService.logout();
  }
}
