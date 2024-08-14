import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-user',
  standalone: true,
  imports: [],
  templateUrl: './nav-user.component.html',
  styleUrls: ['./nav-user.component.css'] // Corregido a styleUrls
})
export class NavUserComponent {
  navigateToLogin() {
    // Implementa la lógica para navegar a la página de inicio de sesión
  }
}
