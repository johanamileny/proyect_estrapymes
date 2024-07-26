import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { GraficaradarComponent } from '../../componentes/graficaradar/graficaradar.component';

@Component({
  selector: 'app-admindashboard',
  standalone: true,
  imports: [BaseChartDirective,GraficaradarComponent],
  templateUrl: './admindashboard.component.html',
  styleUrl: './admindashboard.component.scss'
})
export class AdmindashboardComponent {

}
