import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service'; 
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';  // Asegúrate de importar CommonModule
import { ReactiveFormsModule } from '@angular/forms';  // Importar ReactiveFormsModule si no está ya importado

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,        // Importar CommonModule para usar ngClass y otras directivas
    ReactiveFormsModule, // Importar ReactiveFormsModule para formularios reactivos
  ],
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
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  login() {
    if (this.loginForm.invalid) {
      this.errorMessage = 'Por favor, complete todos los campos correctamente.';
      return;
    }

    const { email, password } = this.loginForm.value;

    let isLogin = false;

    try {
      isLogin = this.authService.login(email, password);
    } catch (error) {
      console.log(error);
      this.errorMessage = (error as any).message;
    }

    if (isLogin) {
      this.router.navigateByUrl('homepage');
    }
  }

  // Método para redirigir al componente de cambio de contraseña
  navigateToChangePassword() {
    this.router.navigate(['/change-password-login']);
  }
}
