import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { passwordConfirmValidator } from '../../shared/password-confirm.directive';
import { User } from '../../componentes/user-detail/user-detail.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    account: new FormControl('natural', Validators.required),
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    typeuser: new FormControl('', [Validators.required]), 
    company: new FormControl(''), 
    sector: new FormControl(''),
    password: new FormControl('', Validators.required),
    passwordConfirm: new FormControl('', Validators.required)
  }, { validators: passwordConfirmValidator });

  isJuridica = false;
  isNatural = false;

  constructor(private authService: AuthService, private router: Router) {}

  get name() {
    return this.registerForm.get('name');
  }
  get typeuser() {
    return this.registerForm.get('typeuser');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get company() {
    return this.registerForm.get('company');
  }

  get sector() {
    return this.registerForm.get('sector');
  }

  ngOnInit(): void {
    // Inicializa el estado del formulario basado en el valor inicial de 'account'
    this.onAccountTypeChange(this.registerForm.get('account')?.value as string);

    // Escucha los cambios en el tipo de cuenta
    this.registerForm.get('account')?.valueChanges.subscribe(value => {
      this.onAccountTypeChange(value as string);
    });
  }

  onAccountTypeChange(type: string) {
    this.isJuridica = type === 'juridica';
    this.isNatural = type === 'natural';

    if (this.isJuridica) {
      this.registerForm.get('company')?.setValidators(Validators.required);
      this.registerForm.get('sector')?.setValidators(Validators.required);
    } else {
      this.registerForm.get('company')?.clearValidators();
      this.registerForm.get('sector')?.clearValidators();
    }

    this.registerForm.get('company')?.updateValueAndValidity();
    this.registerForm.get('sector')?.updateValueAndValidity();
  
    if (this.isNatural) {
      this.registerForm.get('typeuser')?.setValidators(Validators.required);
    } else {
      this.registerForm.get('typeuser')?.clearValidators();
    }
    this.registerForm.get('typeuser')?.updateValueAndValidity();
  }

  register() {
    if (this.registerForm.valid) {
      // Almacena la información en localStorage o sessionStorage
      const userData = this.registerForm.value;

      // Usa localStorage o sessionStorage
      localStorage.setItem('userData', JSON.stringify(userData));  // Persistente entre sesiones
      // sessionStorage.setItem('userData', JSON.stringify(userData)); // Se elimina al cerrar el navegador

      console.log('Datos guardados en localStorage:', userData);

      // Llama al servicio de autenticación si es necesario
      this.authService.register(userData);

      // Redirige a la página de inicio de sesión o a donde desees
      this.router.navigate(['/login']);
    } else {
      console.log('El formulario es inválido');
    }
  }
}
