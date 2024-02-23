// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated(): boolean {
    // Implement logic to check if the user is authenticated (e.g., check if token exists)
    return true; // Example implementation, replace with actual logic
  }
}
