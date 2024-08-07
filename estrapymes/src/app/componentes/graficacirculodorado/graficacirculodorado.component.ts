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
  imports: [BaseChartDirective, FormsModule, CommonModule] // Importa los módulos necesarios
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
    datasets: [
      {
        data: [1, 1, 1], // Valores iniciales para el gráfico
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], // Colores para cada segmento
        borderWidth: 0
      }
    ]
  };

  chartType: CustomChartType = 'doughnut'; 

  chartOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false }
    },
    elements: {
      arc: {
        borderWidth: 0
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
          data: [1, 1, 1], // Ajusta los valores según sea necesario
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], // Colores para cada segmento
          borderWidth: 0
        }
      ]
    };
  }
}
