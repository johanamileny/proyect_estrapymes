import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) {}

  register(userData: any) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));
    this.router.navigate(['/login']);
  }

  login(email: string, password: string): boolean {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: any) => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('loggedUser', JSON.stringify(user));
      this.router.navigate(['/homepage']);
      return true;
    }
    return false;
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  getLoggedUser() {
    return JSON.parse(localStorage.getItem('loggedUser') || '{}');
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('loggedUser');
    this.router.navigate(['/login']);
  }
}
