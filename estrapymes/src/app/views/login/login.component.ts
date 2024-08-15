import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service'; // Ajusta la ruta según sea necesario
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';
  showPasswordChange: boolean = false;

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService, 
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required,Validators.email],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.invalid) {
      this.errorMessage = 'Por favor, complete todos los campos correctamente.';
      console.log('Formulario inválido:', this.loginForm.value); // Depuración
      return;
    }

    const { email, password } = this.loginForm.value;
    console.log('Intentando iniciar sesión con:', email, password); // Depuración

    const isLoginSuccessful = this.authService.login(email, password);

    if (isLoginSuccessful) {
      console.log('Inicio de sesión exitoso'); // Depuración
      this.router.navigateByUrl('/homepage');
    } else {
      this.errorMessage = 'Correo electrónico o contraseña incorrectos.';
      console.log('Inicio de sesión fallido'); // Depuración
    }
  }

  // Método para redirigir al componente de cambio de contraseña
  navigateToChangePassword() {
    this.router.navigate(['/change-password-login']);
  }
}
