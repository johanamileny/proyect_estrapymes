import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  constructor(private router: Router) {}

  // Navegar a la vista de login
  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  // Navegar a la vista de registro
  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}
