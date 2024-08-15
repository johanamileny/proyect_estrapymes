import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule], 
  templateUrl: './change-password-login.component.html',
  styleUrls: ['./change-password-login.component.css']
})
export class ChangePasswordLoginComponent implements OnInit {
  changePasswordForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.changePasswordForm = this.fb.group({
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  ngOnInit(): void {}

 
  get newPassword() {
    return this.changePasswordForm.get('newPassword');
  }

  get confirmPassword() {
    return this.changePasswordForm.get('confirmPassword');
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const newPassword = formGroup.get('newPassword');
    const confirmPassword = formGroup.get('confirmPassword');
    
    return newPassword && confirmPassword && newPassword.value === confirmPassword.value
      ? null
      : { mismatch: true };
  }

  onSubmit() {
    if (this.changePasswordForm.valid) {
      console.log('Contraseña cambiada exitosamente.');
    }
  }
}