import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-user',
  standalone: true,
  imports: [],
  templateUrl: './nav-user.component.html',
  styleUrls: ['./nav-user.component.css'] // Corregido a styleUrls
})
export class NavUserComponent {
  navigateToLogin() {
  
  }
  navigateToBook() {
    window.open('https://editorial.eafit.edu.co/index.php/editorial/catalog/view/195/267/915', '_blank');
  }
}
