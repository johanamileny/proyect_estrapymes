import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-graficacirculodorado',
  standalone: true,
  templateUrl: './graficacirculodorado.component.html',
  styleUrls: ['./graficacirculodorado.component.css']
})
export class GraficacirculodoradoComponent implements OnInit {
  @ViewChild('chart', { static: true }) private chartContainer!: ElementRef;

  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }

  private createChart(): void {
    const element = this.chartContainer.nativeElement;
    const data = [
      { strategy: 'Bajo precio', x: -1, y: 0 },
      { strategy: 'Bajo precio / Valor añadido', x: -0.5, y: -0.5 },
      { strategy: 'Híbrida', x: 0, y: -1 },
      { strategy: 'Diferenciación', x: 1, y: 0 },
      { strategy: 'Diferenciación segmentada', x: 0.5, y: 0.5 },
      { strategy: 'Estrategias destinadas al fracaso', x: 0, y: 1 }
    ];

    const width = 400; // Tamaño más pequeño
    const height = 400; // Tamaño más pequeño
    const radius = Math.min(width, height) / 2;

    // Remove any existing SVG
    d3.select(element).selectAll('*').remove();

    const svg = d3.select(element)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`); // Corrige el uso de translate

    const scale = d3.scaleLinear()
      .domain([-1, 1])
      .range([-radius, radius]);

    // Draw X and Y axes
    svg.append('g')
      .attr('class', 'x-axis')
      .call(d3.axisBottom(scale).ticks(5).tickSize(-radius * 2).tickFormat(d => `${d}`)) // Corrige el uso de tickFormat
      .attr('transform', `translate(0, ${scale(0)})`); // Corrige el uso de translate

    svg.append('g')
      .attr('class', 'y-axis')
      .call(d3.axisLeft(scale).ticks(5).tickSize(-radius * 2).tickFormat(d => `${d}`)) // Corrige el uso de tickFormat
      .attr('transform', `translate(${scale(0)}, 0)`); // Corrige el uso de translate

    // Draw data points
    data.forEach(d => {
      svg.append('circle')
        .attr('cx', scale(d.x))
        .attr('cy', scale(d.y))
        .attr('r', 4) // Tamaño más pequeño
        .style('fill', 'black');

      svg.append('text')
        .attr('x', scale(d.x))
        .attr('y', scale(d.y))
        .attr('dy', -10)
        .attr('text-anchor', 'middle')
        .text(d.strategy);
    });

    // Add labels
    svg.append('text')
      .attr('x', 0)
      .attr('y', -radius - 20) // Ajusta la posición
      .attr('text-anchor', 'middle')
      .text('Valor percibido del producto');

    svg.append('text')
      .attr('x', 0)
      .attr('y', radius + 40) // Ajusta la posición
      .attr('text-anchor', 'middle')
      .text('Precio');
  }
}
