import { Component, OnInit } from '@angular/core';
import { Chart, ChartType } from 'chart.js/auto';
import { FormsModule } from '@angular/forms'; // Asegúrate de importarlo
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-graficaradar',
  standalone: true,
  templateUrl: './graficaradar.component.html',
  styleUrls: ['./graficaradar.component.css'],
  imports: [FormsModule,NgFor] // Importar FormsModule en el componente standalone
})
export class GraficaradarComponent implements OnInit {

  public chart: Chart;
  public labels = [
    'Conocimiento del Cliente',
    'Conocimiento del Negocio',
    'Alineación en la comunicación interna',
    'Salud Financiera',
    'Coherencia del modelo de negocio',
  ];

  public dataEmpresaUno: number[] = [4, 4, 4, 4, 4];
  public dataEmpresaDos: number[] = [4, 3, 4, 2, 4];

  ngOnInit(): void {
    this.createChart();
  }

  private createChart(): void {
    const data = {
      labels: this.labels,
      datasets: [{
        label: 'Empresa Uno',
        data: this.dataEmpresaUno,
        fill: true,
      backgroundColor: "rgba(54, 162, 235, 0.2)", /* Azul suave */
      borderColor: "rgba(54, 162, 235, 1)", /* Azul profesional */
      pointBackgroundColor: "rgba(54, 162, 235, 1)", /* Azul profesional */
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(54, 162, 235, 1)" /* Azul profesional */
      }, {
        label: 'Empresa Dos',
        data: this.dataEmpresaDos,
        fill: true,
        backgroundColor: "rgba(75, 192, 192, 0.2)", /* Verde suave */
        borderColor: "rgba(75, 192, 192, 1)", /* Verde profesional */
        pointBackgroundColor: "rgba(75, 192, 192, 1)", /* Verde profesional */
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(75, 192, 192, 1)" /* Verde profesional */
      }]
    };

    this.chart = new Chart('chart', {
      type: 'radar' as ChartType,
      data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          r: {
            angleLines: {
              display: true
            },
            suggestedMin: 0,
            suggestedMax: 5
          }
        },
        plugins: {
          legend: {
            display: true,
            position: 'top'
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                let label = context.dataset.label || '';
                if (label) {
                  label += ': ';
                }
                if (context.parsed.r !== null) {
                  label += context.parsed.r;
                }
                return label;
              }
            }
          }
        }
      }
    });
  }

  public updateData(company: 'empresaUno' | 'empresaDos', index: number, value: any): void {
    const numericValue = Number(value); // Convierte el valor a número

    // Actualizar el dato correspondiente
    if (company === 'empresaUno') {
      this.dataEmpresaUno[index] = numericValue;
    } else {
      this.dataEmpresaDos[index] = numericValue;
    }

    // Actualizar el gráfico
    this.chart.data.datasets.forEach((dataset) => {
      if (dataset.label === 'Empresa Uno') {
        dataset.data = this.dataEmpresaUno;
      } else if (dataset.label === 'Empresa Dos') {
        dataset.data = this.dataEmpresaDos;
      }
    });
    this.chart.update();
  }
}
