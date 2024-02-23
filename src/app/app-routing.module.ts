import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { EmployeeComponent } from './employee/employee.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AuthGuard } from './auth.guard';
import { StudentComponent } from './student/student.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';


const routes: Routes = [
  {path: 'users', component: UsersComponent},
  { 
    path: 'admin/students',
    component: StudentComponent,
    canActivate: [AuthGuard],
    data: { expectedRole: 'ADMIN' }
  },
  { 
    path: 'user/students',
    component: StudentComponent,
    canActivate: [AuthGuard],
    data: { expectedRole: 'USER' }
  },
  {path: 'student', component: StudentComponent},
  {path: 'user-dashboard', component: UserDashboardComponent},
  {path: 'admin-dashboard', component: AdminDashboardComponent},
  {path: 'student-dashboard', component: StudentDashboardComponent},
  {path: 'employee', component: EmployeeComponent, canActivate: [AuthGuard]},
  {path: 'registration', component: RegisterUserComponent},
  {path: 'login', component: UserLoginComponent},
  {path: 'student-login', component: StudentLoginComponent},
  { path: '**', redirectTo: '/login' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
