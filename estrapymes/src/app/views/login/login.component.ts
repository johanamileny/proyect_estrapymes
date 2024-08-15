import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.invalid) {
      this.errorMessage = 'Por favor, complete todos los campos correctamente.';
      return;
    }

    const { email, password } = this.loginForm.value;
    // Aquí podrías llamar al AuthService para manejar el login, pero lo omití por simplicidad.
    const isLoginSuccessful = true; // Supongamos que el login fue exitoso.

    if (isLoginSuccessful) {
      this.router.navigateByUrl('/homepage');
    } else {
      this.errorMessage = 'Correo electrónico o contraseña incorrectos.';
    }
  }
}
