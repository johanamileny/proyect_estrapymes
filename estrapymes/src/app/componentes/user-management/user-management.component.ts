import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  users: any[] = []; // Lista de usuarios
  userForm: FormGroup;
  editingUser: any | null = null;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      account: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    // Lógica para cargar usuarios (ej. desde un servicio)
    this.users = [
      { id: 1, name: 'Usuario 1', account: 'user1@example.com', active: true },
      { id: 2, name: 'Usuario 2', account: 'user2@example.com', active: true }
    ];
  }

  addUser() {
    if (this.userForm.valid) {
      if (this.editingUser) {
        // Editar usuario
        this.editingUser.name = this.userForm.value.name;
        this.editingUser.account = this.userForm.value.account;
      } else {
        // Agregar nuevo usuario
        this.users.push({
          id: this.users.length + 1,
          ...this.userForm.value,
          active: true // Por defecto, el nuevo usuario es activo
        });
      }
      this.userForm.reset();
      this.editingUser = null;
    }
  }

  editUser(user: any) {
    this.editingUser = user;
    this.userForm.setValue({
      name: user.name,
      account: user.account
    });
  }

  deleteUser(user: any) {
    this.users = this.users.filter(u => u !== user);
  }

  toggleUserStatus(user: any) {
    user.active = !user.active;
  }
}
