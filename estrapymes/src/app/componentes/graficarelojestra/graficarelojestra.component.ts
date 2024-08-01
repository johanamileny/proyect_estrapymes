import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-graficarelojestra',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './graficarelojestra.component.html',
  styleUrls: ['./graficarelojestra.component.css']
})
export class GraficarelojestraComponent implements OnInit {

  // Configuración del gráfico
  public radarChartOptions: ChartOptions<'radar'> = {
    responsive: true,
    scales: {
      radar: {
        min: 0, // Valor mínimo del eje
        max: 50, // Valor máximo del eje
        ticks: {
          // Configuración para los ticks en Chart.js v3/v4
          // No se usa suggestedMin y suggestedMax en lugar de beginAtZero
        },
        grid: {
          circular: true
        }
      }
    }
  };

  public radarChartLabels: string[] = [
    'Diferenciación', 
    'Diferenciación segmentada', 
    'Estrategias destinadas al fracaso',
    'Bajo precio / Valor añadido', 
    'Bajo precio', 
    'Híbrida'
  ];
  
  public radarChartData = [
    { data: [6, 5, 50, 8, 6, 5], label: 'Company A' },
    { data: [8, 8, 0, 9, 6, 7], label: 'Company B' }
  ];

  public radarChartType: ChartType = 'radar';

  constructor() { }

  ngOnInit(): void {
  }
}
