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
    typeuser: new FormControl(''),
    company: new FormControl(''),
    sector: new FormControl(''),
    password: new FormControl('', Validators.required),
    passwordConfirm: new FormControl('', Validators.required)
  }, { validators: passwordConfirmValidator });

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.updateValidators(this.registerForm.get('account')?.value as string);

    // Actualiza validadores cuando el tipo de cuenta cambia
    this.registerForm.get('account')?.valueChanges.subscribe(value => {
      this.updateValidators(value as string);
    });
  }

  updateValidators(accountType: string) {
    if (accountType === 'juridica') {
      this.registerForm.get('company')?.setValidators(Validators.required);
      this.registerForm.get('sector')?.setValidators(Validators.required);
      this.registerForm.get('typeuser')?.clearValidators();
    } else {
      this.registerForm.get('company')?.clearValidators();
      this.registerForm.get('sector')?.clearValidators();
      this.registerForm.get('typeuser')?.setValidators(Validators.required);
    }

    this.registerForm.get('company')?.updateValueAndValidity();
    this.registerForm.get('sector')?.updateValueAndValidity();
    this.registerForm.get('typeuser')?.updateValueAndValidity();
  }

  register() {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value);
    } else {
      console.log('El formulario es inválido');
    }
  }
}
