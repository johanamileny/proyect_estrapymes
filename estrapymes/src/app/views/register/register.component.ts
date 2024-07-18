import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { passwordConfirmValidator } from '../../shared/password-confirm.directive';
import { Router } from '@angular/router';

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
    company: new FormControl(''), 
    sector: new FormControl(''),
    password: new FormControl('', Validators.required),
    passwordConfirm: new FormControl('', Validators.required)
  }, { validators: passwordConfirmValidator });

  isJuridica = false;

  constructor(private authService: AuthService, private router: Router) {}

  get name() {
    return this.registerForm.get('name');
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

    if (this.isJuridica) {
      this.registerForm.get('company')?.setValidators(Validators.required);
      this.registerForm.get('sector')?.setValidators(Validators.required);
    } else {
      this.registerForm.get('company')?.clearValidators();
      this.registerForm.get('sector')?.clearValidators();
    }

    this.registerForm.get('company')?.updateValueAndValidity();
    this.registerForm.get('sector')?.updateValueAndValidity();
  }

  register() {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value);
    } else {
      console.log('El formulario es inválido');
    }
  }
}
