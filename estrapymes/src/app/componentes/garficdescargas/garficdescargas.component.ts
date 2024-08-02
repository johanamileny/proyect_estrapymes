import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-garficdescargas',
  standalone: true,
  imports: [],
  templateUrl: './garficdescargas.component.html',
  styleUrls: ['./garficdescargas.component.css']
})
export class GarficdescargasComponent implements OnInit {
  public chart: Chart<'line'>;

  ngOnInit(): void {
    this.createChart();
  }

  private createChart() {
    // Registrar todos los componentes necesarios de Chart.js
    Chart.register(...registerables);

    // Datos de ejemplo para múltiples años
    const data = {
      labels: [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
      ], // Etiquetas de los meses
      datasets: [
        {
          label: '2023',
          data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120], // Datos para 2023
          fill: false,
          borderColor: '#007bff',
          backgroundColor: 'rgba(0, 123, 255, 0.2)',
          tension: 0.4,
          borderWidth: 2,
          pointBackgroundColor: '#007bff',
          pointBorderColor: '#ffffff',
          pointBorderWidth: 2,
          pointRadius: 4,
          pointHoverRadius: 6
        },
        {
          label: '2024',
          data: [15, 25, 35, 45, 55, 65, 75, 85, 95, 105, 115, 125], // Datos para 2024
          fill: false,
          borderColor: '#28a745',
          backgroundColor: 'rgba(40, 167, 69, 0.2)',
          tension: 0.4,
          borderWidth: 2,
          pointBackgroundColor: '#28a745',
          pointBorderColor: '#ffffff',
          pointBorderWidth: 2,
          pointRadius: 4,
          pointHoverRadius: 6
        }
      ]
    };

    this.chart = new Chart('downloadsChart', {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'Descargas de Libro EstraMyPymes', // Título del gráfico
            font: {
              family: 'Roboto', // Fuente del título
              size: 16,
              weight: 700 // Peso del texto del título como número
            },
            color: '#495057', // Color del texto del título
            padding: {
              top: 20,
              bottom: 20
            }
          },
          legend: {
            display: true,
            position: 'top',
            labels: {
              color: '#495057',
              font: {
                family: 'Roboto', // Fuente de la leyenda
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
                // Mostrar el valor de las descargas en el tooltip
                return `Descargas: ${tooltipItem.raw}`;
              }
            }
          }
        },
        scales: {
          x: {
            beginAtZero: true,
            grid: {
              color: '#e9ecef' // Color de las líneas de la rejilla
            },
            ticks: {
              color: '#495057', // Color de los ticks
              font: {
                family: 'Roboto', // Fuente de los ticks
                size: 12 // Tamaño de la fuente de los ticks
              }
            }
          },
          y: {
            beginAtZero: true,
            grid: {
              color: '#e9ecef' // Color de las líneas de la rejilla
            },
            ticks: {
              color: '#495057', // Color de los ticks
              font: {
                family: 'Roboto', // Fuente de los ticks
                size: 12 // Tamaño de la fuente de los ticks
              },
              callback: (value) => `${value} descargas` // Etiqueta personalizada para el eje Y
            }
          }
        }
      }
    });
  }
}
