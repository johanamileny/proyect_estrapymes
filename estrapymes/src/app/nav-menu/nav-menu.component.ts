import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.css'
})
export class NavMenuComponent implements OnInit {
  constructor(private router: Router) {}
  
  ngOnInit(): void {
    this.initScrollAnimation();
    this.applyAnimationOnLoad();
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

  // Aplicar animación a los elementos visibles al cargar la página
  applyAnimationOnLoad(): void {
    const targets = document.querySelectorAll('.scroll-trigger');
    requestAnimationFrame(() => {
      targets.forEach(target => {
        if (this.isElementInViewport(target)) {
          target.classList.add('visible');
        } else {
          target.classList.add('initial-visibility');
        }
      });
    });
  }

  // Verificar si un elemento está en el viewport
  isElementInViewport(element: Element): boolean {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Método para desplazarse a una sección específica y activar la animación
  scrollToSection(event: Event, sectionId: string): void {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // Añadir clase de animación
      section.classList.add('animate');
      // Eliminar la clase después de la animación para permitir futuros clics
      setTimeout(() => section.classList.remove('animate'), 1000); // 1000 ms debe coincidir con la duración de la animación en CSS
    }
  }
}
