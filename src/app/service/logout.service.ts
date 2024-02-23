import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private router: Router) { }

  logout() {
    // Clear authentication state (e.g., remove tokens, clear session)
    
    // Redirect to login page
    this.router.navigate(['/login']);
  }
}
