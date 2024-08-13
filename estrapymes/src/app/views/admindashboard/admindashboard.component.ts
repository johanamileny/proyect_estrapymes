import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import { NavMenuAdministradorComponent } from '../../nav-menu-administrador/nav-menu-administrador.component';
import { User, UserDetailComponent } from '../../componentes/user-detail/user-detail.component';
import { GraficaradarComponent } from '../../componentes/graficaradar/graficaradar.component';
import { GraficBowmanComponent } from '../../componentes/grafic-bowman/grafic-bowman.component';
import { GraficorelojComponent } from '../../componentes/graficoreloj/graficoreloj.component';
import { GarficdescargasComponent } from '../../componentes/garficdescargas/garficdescargas.component';
import { GarficcirculoComponent } from '../../componentes/graficacirculodorado/graficacirculodorado.component';
import { UserListComponent } from '../../componentes/user-list/user-list.component';
import { UsersService } from '../../services/user.service';
import { UserManagementModule } from '../../componentes/user-management/user-management.module'; // Mantén esta línea

@Component({
  selector: 'app-admindashboard',
  standalone: true,
  imports: [
    CommonModule,
    BaseChartDirective,
    NavMenuAdministradorComponent,
    UserListComponent,
    ChangePasswordComponent,
    GraficaradarComponent,
    GraficBowmanComponent,
    GraficorelojComponent,
    GarficdescargasComponent,
    GarficcirculoComponent,
    RouterOutlet,
    RouterModule,
    UserManagementModule,
  ],
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.scss']
})
export class AdmindashboardComponent {
  selectedUser!: User;
  users: User[] = [];
  showPasswordChange: boolean = false;
  showUserManagement: boolean = false; // Añade esta propiedad

  constructor(private usersService: UsersService, private router: Router) {}

  updateUser(updatedUser: User) {
    const index = this.users.findIndex(user => user.id === updatedUser.id);
    if (index !== -1) {
      this.users[index] = updatedUser;
      this.refreshUserList();
    }
  }

  refreshUserList() {
    this.usersService.getUsers().subscribe(users => {
      this.users = users;
    });
  }
  
  logout() {
    console.log('Usuario ha cerrado sesión');
    this.router.navigate(['/login']);
  }

  toggleAccountMenu() {
    console.log('Menu de cuenta alternado');
  }

  showChangePassword() {
    this.showPasswordChange = true;
  }

  hideChangePassword() {
    this.showPasswordChange = false;
  }

  showUserManagementPanel() {
    this.showUserManagement = true; // Método para mostrar el panel de gestión de usuarios
  }

  hideUserManagementPanel() {
    this.showUserManagement = false; // Método para ocultar el panel de gestión de usuarios
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
