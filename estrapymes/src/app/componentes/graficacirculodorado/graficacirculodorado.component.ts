import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-garficcirculo',
  standalone: true,
  imports: [],
  templateUrl: './graficacirculodorado.component.html',
  styleUrls: ['./graficacirculodorado.component.css']
})
export class GarficcirculoComponent implements OnInit {
  public chart: Chart<'doughnut'>;

  ngOnInit(): void {
    this.createChart();
  }

  private createChart() {
    // Registrar todos los componentes necesarios de Chart.js
    Chart.register(...registerables);

    // Datos para el gráfico de tipo doughnut
    const data = {
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
      datasets: [{
        label: 'Descargas por Mes',
        data: [30, 50, 40, 60, 70, 90], // Datos de ejemplo
        backgroundColor: [
          '#ff6384', // Color de la sección 1
          '#36a2eb', // Color de la sección 2
          '#cc65fe', // Color de la sección 3
          '#ffce56', // Color de la sección 4
          '#4bc0c0', // Color de la sección 5
          '#f4511e'  // Color de la sección 6
        ],
        hoverBackgroundColor: [
          '#ff6384', // Color al pasar el ratón sobre la sección 1
          '#36a2eb', // Color al pasar el ratón sobre la sección 2
          '#cc65fe', // Color al pasar el ratón sobre la sección 3
          '#ffce56', // Color al pasar el ratón sobre la sección 4
          '#4bc0c0', // Color al pasar el ratón sobre la sección 5
          '#f4511e'  // Color al pasar el ratón sobre la sección 6
        ]
      }]
    };

    this.chart = new Chart('doughnutChart', {
      type: 'doughnut',
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
            labels: {
              color: '#495057',
              font: {
                family: 'Roboto',
                size: 14
              }
            }
          },
          tooltip: {
            backgroundColor: '#343a40',
            titleColor: '#ffffff',
            bodyColor: '#ffffff',
            borderColor: '#495057',
            borderWidth: 1,
            cornerRadius: 4,
            padding: {
              top: 6,
              bottom: 6,
              left: 8,
              right: 8
            },
            callbacks: {
              label: (tooltipItem) => {
                // Mostrar el valor en el tooltip
                return `Descargas: ${tooltipItem.raw}`;
              }
            }
          }
        }
      }
    });
  }
}
