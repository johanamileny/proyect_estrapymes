import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service'; // Asegúrate de que la ruta sea correcta
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'] // Corregido styleUrls en lugar de styleUrl
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    console.log(this.username, this.password);

    let isLogin = false;

    try {
      isLogin = this.authService.login(this.username, this.password);
    } catch (error) {
      console.log(error);
      this.errorMessage = (error as any).message;
    }

    if (isLogin) {
      this.router.navigateByUrl('homepage');
    }
  }
}
