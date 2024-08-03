import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-graficdescargas',
  standalone: true,
  imports: [],
  templateUrl: './garficdescargas.component.html',
  styleUrls: ['./garficdescargas.component.css']
})
export class GarficdescargasComponent implements OnInit, AfterViewInit {
  public chart: Chart<'line'>;

  ngOnInit(): void {
    Chart.register(...registerables);
  }

  ngAfterViewInit(): void {
    this.createChart();
    // Esperar a que el gráfico se renderice correctamente antes de forzar el redimensionamiento
    setTimeout(() => {
      this.chart.resize();
    }, 100);
    window.addEventListener('resize', () => this.chart.resize());
  }

  private createChart() {
    const data = {
      labels: [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
      ],
      datasets: [
        {
          label: '2023',
          data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
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
          data: [15, 25, 35, 45, 55, 65, 75, 85, 95, 105, 115, 125],
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
            text: '',
            font: {
              family: 'Roboto',
              size: 16,
              weight: 700
            },
            color: '#495057',
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
                return `Descargas: ${tooltipItem.raw}`;
              }
            }
          }
        },
        scales: {
          x: {
            beginAtZero: true,
            grid: {
              color: '#e9ecef'
            },
            ticks: {
              color: '#495057',
              font: {
                family: 'Roboto',
                size: 12
              }
            }
          },
          y: {
            beginAtZero: true,
            grid: {
              color: '#e9ecef'
            },
            ticks: {
              color: '#495057',
              font: {
                family: 'Roboto',
                size: 12
              },
              callback: (value) => `${value} descargas`
            }
          }
        }
      }
    });
  }
}
