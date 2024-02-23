// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
// import { AuthService } from './auth.service';
// import { LoginuserService } from './service/loginuser.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class RoleGuard{
//   constructor(private authService: AuthService, private router: Router,private loginuserService: LoginuserService,) {}

//   canActivate(state: RouterStateSnapshot): boolean {
//     const expectedRole = this.loginuserService.getCurrentUser().role;
//     const role = this.loginuserService.getCurrentUser().role;

//     if (role === expectedRole) {
//       return true;
//     } else {
//       this.router.navigate(['/access-denied']);
//       return false;
//     }
//   }
// }