import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-grafic-bowman',
  standalone: true,
  imports: [CommonModule], // Incluye CommonModule aquí
  templateUrl: './grafic-bowman.component.html',
  styleUrls: ['./grafic-bowman.component.css'] // Corrige 'styleUrl' a 'styleUrls'
})
export class GraficBowmanComponent implements OnInit {
  public quadrants = [
    { name: 'Sin filigranas', description: 'Características: Probablemente sean especificas al segmento.' },
    { name: 'Precios bajos', description: 'Riesgo de guerra de precios y margenes reducidos . es necesario ser lider en costos'},
    { name: 'Hibridas', description: 'Costos reducidos y reinversion en bajos precios y diferenciacion.'},
    { name: 'Diferenciación' , description: '(A)Sin prima de precio,Valor añadido percibido por el usuario que permite obtener ventajas en cuota de mercado.(B)Diferenciación con prima de precio,valorañadido percibido suficiente para respaldar la prima.' },
    { name: 'Diferenciación segmentada', description: ' valor añadido en percibido percibido en un segmento en concreto que permite una primaen el precio.' },
    { name: 'Mayor precio/valor estándar', description: 'Mayores márgenes si los competidores no son seguidores;riesgo de perder cuota de mercado.' },
    { name: 'Mayor precio/valor reducido', description: 'Solo es factible en una situación de monopolio.' },
    { name: 'Valor reducido /precio estándar', description: 'Perdida de cuota de mercado.' },
  ];

  constructor() { }

  ngOnInit(): void {
  }
}



