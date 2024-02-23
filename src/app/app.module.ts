import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RegisterUserComponent } from './register-user/register-user.component';
import { UsersComponent } from './users/users.component';
import { EmployeeComponent } from './employee/employee.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { StudentComponent } from './student/student.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentLoginComponent } from './student-login/student-login.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    UsersComponent,
    EmployeeComponent,
    UserLoginComponent,
    StudentComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    EmployeeDashboardComponent,
    EmployeeLoginComponent,
    StudentDashboardComponent,
    StudentLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [provideClientHydration() , provideHttpClient(withFetch())],
  bootstrap: [AppComponent]
})
export class AppModule { }
