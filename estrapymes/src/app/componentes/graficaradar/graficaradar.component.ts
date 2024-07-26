import { Component,OnInit } from '@angular/core';
import { Chart, ChartType } from 'chart.js/auto';

@Component({
  selector: 'app-graficaradar',
  standalone: true,
  imports: [],
  templateUrl: './graficaradar.component.html',
  styleUrl: './graficaradar.component.css',
})
export class GraficaradarComponent implements OnInit {

  public chart: Chart;
  ngOnInit(): void {

    const data = {
      labels: [
        'Conocimiento del Cliente',
        'Conocimiento del Negocio	',
        'Alineación en la comunicación interna',
        'Salud Financiera',
        'Coherencia del modelo de negocio',
      ],
      datasets: [{
        label: 'empresa uno',
        data: [2,3, 1, 1, 1],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
      }, {
        label: 'empresa dos',
        data: [4, 3, 4, 2, 4],
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)'
      }]
    };

    this.chart = new Chart("chart",{
      type : 'radar' as ChartType,
       data 
  })
    
  }
    }
