import { Component } from '@angular/core';
import { ChartType, ChartOptions, ChartData } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

type CustomChartType = 'doughnut' | 'bar' | 'line'; 

@Component({
  selector: 'app-graficacirculodorado',
  standalone: true,
  templateUrl: './graficacirculodorado.component.html',
  styleUrls: ['./graficacirculodorado.component.css'],
  imports: [BaseChartDirective, FormsModule, CommonModule]
})
export class GarficcirculoComponent {
  circulo = {
    proposito: '',
    propuesta: '',
    productos: ''
  };

  submitted = false;

  chartLabels: string[] = ['¿Por qué?', '¿Cómo?', '¿Qué?'];

  chartData: ChartData<'doughnut'> = {
    labels: this.chartLabels,
    datasets: [{ data: [350, 450, 100] },
    { data: [50, 150, 120] },
    { data: [250, 130, 70] },
      {
        data: [1, 1, 1], // Valores iniciales para el gráfico
        backgroundColor: ['#ED7D30', '#FFC000', '#4473C5'], // Colores de fondo del gráfico
        borderColor: ['#ED7D30', '#FFC000', '#4473C5'],
        borderWidth: 2 // Borde más notorio para los segmentos
      }
    ]
  };

  chartType: CustomChartType = 'doughnut'; 

  chartOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    plugins: {
      legend: {
        display: true, // Mostrar leyenda
        position: 'top', // Posición de la leyenda
        labels: {
          color: '#333', // Color del texto de la leyenda
          font: {
            size: 14 // Tamaño de la fuente de la leyenda
          }
        }
      },
      tooltip: {
        enabled: true // Habilitar tooltip
      }
    },
    elements: {
      arc: {
        borderWidth: 2 // Borde más notorio para los segmentos
      }
    }
  };

  onSubmit() {
    this.submitted = true;
    // Actualiza los datos del gráfico después de enviar el formulario
    this.chartData = {
      labels: this.chartLabels,
      datasets: [
        {
          data: [Math.random() * 10, Math.random() * 10, Math.random() * 10], // Valores aleatorios para ejemplo
          backgroundColor: ['#ED7D30', '#FFC000', '#4473C5'], // Colores de fondo del gráfico
          borderColor: ['#ED7D30', '#FFC000', '#4473C5'],
          borderWidth: 2
        }
      ]
    };
  }
}
