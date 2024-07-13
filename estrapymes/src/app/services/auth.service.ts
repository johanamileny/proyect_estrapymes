import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) {}

  // Actualiza el método register para que sea una función síncrona
  register(userData: any) {
    // Guarda los datos del usuario en el localStorage
    localStorage.setItem('user', JSON.stringify(userData));
    
    // Redirige al usuario a la página de inicio de sesión
    this.router.navigate(['/login']);
  }

  // Método login para validar las credenciales del usuario
  login(email: string, password: string): boolean {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (user.email === email && user.password === password) {
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/homepage']); // Redirige a la página de inicio después del login exitoso
      return true;
    }
    return false;
  }

  // Verifica si el usuario está autenticado
  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  // Elimina la información del usuario del localStorage y redirige al login
  logout() {
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/login']);
  }
}
