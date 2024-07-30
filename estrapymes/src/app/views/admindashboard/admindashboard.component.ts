import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { GraficaradarComponent } from '../../componentes/graficaradar/graficaradar.component';
import { GraficarelojestraComponent } from '../../componentes/graficarelojestra/graficarelojestra.component';
import { GraficacirculodoradoComponent } from '../../componentes/graficacirculodorado/graficacirculodorado.component';
import { UsersService } from '../../services/user.service';
import { UserListComponent } from '../../componentes/user-list/user-list.component';
import { User, UserDetailComponent } from '../../componentes/user-detail/user-detail.component';
import { GraficBowmanComponent } from '../../componentes/grafic-bowman/grafic-bowman.component';


@Component({
  selector: 'app-admindashboard',
  standalone: true,
  imports: [BaseChartDirective,GraficaradarComponent,GraficarelojestraComponent,
            GraficacirculodoradoComponent,UserListComponent,UserDetailComponent,GraficBowmanComponent],
  templateUrl: './admindashboard.component.html',
  styleUrl: './admindashboard.component.scss'
})

export class  AdmindashboardComponent {
  selectedUser!: User;
  users: User[] = [];
  constructor(private usersService: UsersService) {}
  // Método para actualizar el usuario en la lista
  updateUser(updatedUser: User) {
    const index = this.users.findIndex(user => user.id === updatedUser.id);
    if (index !== -1) {
      this.users[index] = updatedUser;
      this.refreshUserList()// Opcional: Puedes emitir un evento para notificar a otros componentes
    }
  }
  refreshUserList() {
    this.usersService.getUsers().subscribe(users => {
      this.users = users;
    });
  }
}
