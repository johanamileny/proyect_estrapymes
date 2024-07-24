import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.initScrollAnimation();
  }

  // Navegar a la vista de login
  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  // Navegar a la vista de registro
  navigateToRegister() {
    this.router.navigate(['/register']);
  }

  // Navegar a la vista de homepage
  navigateToHomepage() {
    this.router.navigate(['/homepage']);
  }

  // Inicializar la animación de scroll
  initScrollAnimation(): void {
    const targets = document.querySelectorAll('.scroll-trigger');
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    targets.forEach(target => {
      observer.observe(target);
    });
  }
}
