import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Chart, ChartType } from 'chart.js';
import { RouterModule, RouterOutlet, Router } from '@angular/router';
import { UserManagementModule } from '../../componentes/user-management/user-management.module';
import { ChangePasswordComponent } from '../change-password/change-password.component';

@Component({
  selector: 'app-student',
  standalone: true,
  imports:  [CommonModule, RouterOutlet, RouterModule, UserManagementModule, ChangePasswordComponent],
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  showPasswordChange: boolean = false;
  showUserManagement: boolean = false; // Añade esta propiedad

  public projects = [
    { company: 'Empresa A', observations: 'Realizar un análisis de mercado.', testResults: [10, 20, 30] },
    { company: 'Empresa B', observations: 'Optimizar el proceso de ventas.', testResults: [15, 25, 35] },
  ];

  public showProjectTable = false;
  public selectedProject: any;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  showProjects(): void {
    this.showProjectTable = true;
    this.selectedProject = null; // Ocultar gráficas si ya están visibles
  }

  hideProjects(): void {
    this.showProjectTable = false;
    this.selectedProject = null; // Ocultar también las gráficas si estaban visibles
  }

  viewTestResults(project: any): void {
    this.selectedProject = project;
    setTimeout(() => this.renderCharts(project.testResults), 0);
  }

  private renderCharts(data: number[]): void {
    // Destruir gráficos existentes si es necesario para evitar duplicados
    if (Chart.getChart('barChart')) {
      Chart.getChart('barChart')!.destroy();
    }
    if (Chart.getChart('lineChart')) {
      Chart.getChart('lineChart')!.destroy();
    }

    // Bar chart
    new Chart('barChart', {
      type: 'bar' as ChartType,
      data: {
        labels: ['Enero', 'Febrero', 'Marzo'],
        datasets: [
          {
            label: 'Resultados del Test',
            data: data,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });

    // Line chart
    new Chart('lineChart', {
      type: 'line' as ChartType,
      data: {
        labels: ['Enero', 'Febrero', 'Marzo'],
        datasets: [
          {
            label: 'Resultados del Test',
            data: data,
            fill: false,
            borderColor: 'rgba(153, 102, 255, 1)',
            tension: 0.1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
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
}
