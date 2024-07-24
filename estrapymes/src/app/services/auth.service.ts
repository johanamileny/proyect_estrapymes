import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) {}

  register(userData: any) {
    localStorage.setItem('email', JSON.stringify(userData));
    this.router.navigate(['/login']);
  }

  login(email: string, password: string): boolean {
    const storedEmail = JSON.parse(localStorage.getItem('email') || '{}');
    if (storedEmail.email === email && storedEmail.password === password) {
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/homepage']);
      return true;
    }
    return false;
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/login']);
  }
}
