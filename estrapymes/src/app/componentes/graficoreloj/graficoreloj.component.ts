import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ChartDataService } from '../../services/chart.service'; // Asegúrate de que la ruta sea correcta
import * as d3 from 'd3';

@Component({
  selector: 'app-graficoreloj',
  standalone: true,
  imports: [],
  templateUrl: './graficoreloj.component.html',
  styleUrls: ['./graficoreloj.component.css']
})
export class GraficorelojComponent implements OnInit {
  @ViewChild('chartContainer') private chartContainer!: ElementRef;

  constructor(private chartDataService: ChartDataService) {}

  ngOnInit(): void {
    this.chartDataService.getChartData().subscribe({
      next: (data: any) => {
        console.log('Data received:', data);
        if (data && data[0]) {
          this.renderChart(data[0]);
        } else {
          console.error('No se recibieron datos válidos para el gráfico');
        }
      },
      error: (error) => {
        console.error('Error al cargar los datos del gráfico:', error);
      },
    });
  }

  private renderChart(data: any) {
    if (!data || !data.arrows) {
      console.error('No se recibieron datos válidos para el gráfico');
      return;
    }

    const element = this.chartContainer.nativeElement;
    const margin = { top: 20, right: 30, bottom: 40, left: 30 };
    const width = (element.offsetWidth ) - margin.left- margin.right;
    const height = element.offsetHeight - margin.top - margin.bottom;

    const svg = d3
      .select(element)
      .append('svg')
      .attr('width', 700)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const x = d3.scaleLinear().domain([-1.5, 1.5]).range([0, width]);
    const y = d3.scaleLinear().domain([-1.5, 1.5]).range([height, 0]);

    // Añadir los ejes sin líneas de cuadrícula
    svg
      .append('g')
      .attr('class', 'axis')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x)
        .tickSize(0) // Elimina las líneas de los cuadrantes
        .tickPadding(10) // Ajusta el espacio entre las etiquetas y los ejes
      );

    svg
      .append('g')
      .attr('class', 'axis')
      .call(d3.axisLeft(y)
        .tickSize(0) // Elimina las líneas de los cuadrantes
        .tickPadding(10) // Ajusta el espacio entre las etiquetas y los ejes
      );

    // Añadir el punto central
    svg
      .append('circle')
      .attr('cx', x(0))
      .attr('cy', y(0))
      .attr('r', 10)
      .style('fill', '#0033A0'); // Azul oscuro EAFIT

    // Definir el marcador de flecha
    svg
      .append('defs')
      .append('marker')
      .attr('id', 'arrow')
      .attr('viewBox', '0 0 10 10')
      .attr('refX', 5)
      .attr('refY', 5)
      .attr('markerWidth', 6)
      .attr('markerHeight', 6)
      .attr('orient', 'auto')
      .append('path')
      .attr('d', 'M 0 0 L 10 5 L 0 10 z')
      .attr('class', 'marker');

    // Añadir las flechas y etiquetas desde el punto central hacia cada parte del plano cartesiano
    const positions = [
      { x: 1.5, y: 0, label: 'Estrategias destinadas al fracaso', labelX: 1.3, labelY: -0.1},   // Flecha hacia la derecha
      { x: -1.5, y: 0, label: 'Bajo precio', labelX: -1.23, labelY: -0.1 },  // Flecha hacia la izquierda
      { x: 0, y: 1.5, label: 'Diferenciación', labelX: 0, labelY: 1.55 },   // Flecha hacia arriba
      { x: 0, y: -1.5, label: 'Precio', labelX: 0.17, labelY: -1.48 },  // Flecha hacia abajo
      { x: 1.5, y: 1.5, label: 'Diferenciación segmentada', labelX: 1.3, labelY: 1.55 }, // Flecha hacia arriba derecha
      { x: -1.5, y: 1.5, label: 'Híbrida', labelX: -1.32, labelY: 1.55 }, // Flecha hacia arriba izquierda
      { x: 1.5, y: -1.5, label: 'Estrategias destinadas al fracaso', labelX: 1.3, labelY: -1.48 }, // Flecha hacia abajo derecha
      { x: -1.5, y: -1.5, label: 'Bajo precio/valor añadido', labelX: -0.9, labelY: -1.48 } // Flecha hacia abajo izquierda
    ];

    positions.forEach(pos => {
      svg
        .append('line')
        .attr('x1', x(0))
        .attr('y1', y(0))
        .attr('x2', x(pos.x))
        .attr('y2', y(pos.y))
        .attr('stroke', '#333333') // Gris oscuro para las flechas
        .attr('stroke-width', 1.5) // Ancho consistente
        .attr('marker-end', 'url(#arrow)');

      // Añadir etiquetas para las flechas, con ajuste de posición individual
      svg
        .append('text')
        .attr('x', x(pos.labelX)) // Ajuste de posición horizontal
        .attr('y', y(pos.labelY)) // Ajuste de posición vertical
        .attr('text-anchor', 'middle') // Centrar horizontalmente
        .text(pos.label);
    });

    // Añadir la elipse
    const oval = data.oval;
    svg
      .append('ellipse')
      .attr('class', 'ellipse') // Aplicar clase CSS para el estilo
      .attr('cx', x(oval.center.x))
      .attr('cy', y(oval.center.y))
      .attr('rx', x(oval.radiusX) - x(0))
      .attr('ry', y(0) - y(oval.radiusY))
      .attr(
        'transform',
        `rotate(${oval.rotation}, ${x(oval.center.x)}, ${y(oval.center.y)})`
      )
      .style('fill', 'none')
      .style('stroke', 'black')
      .style('stroke-dasharray', '1,1');

    // Añadir la estrella en el cuadrante inferior izquierdo
    const star = {
      x: -0.5, // Ajusta según necesites para ubicar la estrella en el cuadrante inferior izquierdo
      y: 0.5
    };
    svg
      .append('path')
      .attr(
        'd', 'M256,32L317.5,191.8L480,191.8L347.2,287.2L408.7,447L256,351.8L103.3,447L164.8,287.2L32,191.8L194.5,191.8L256,32z'
      )
      .attr(
        'transform',
        `translate(${x(star.x)}, ${y(star.y)}) scale(0.1)`
      )
      .attr('fill', '#F7D700'); // Amarillo
  }
}
