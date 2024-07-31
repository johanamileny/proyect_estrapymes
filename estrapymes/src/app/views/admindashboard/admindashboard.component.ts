import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { GraficaradarComponent } from '../../componentes/graficaradar/graficaradar.component';
import { GraficarelojestraComponent } from '../../componentes/graficarelojestra/graficarelojestra.component';
import { GraficacirculodoradoComponent } from '../../componentes/graficacirculodorado/graficacirculodorado.component';
import { NavMenuAdministradorComponent } from '../../nav-menu-administrador/nav-menu-administrador.component';


@Component({
  selector: 'app-admindashboard',
  standalone: true,
  imports: [BaseChartDirective,GraficaradarComponent,GraficarelojestraComponent,GraficacirculodoradoComponent,NavMenuAdministradorComponent],
  templateUrl: './admindashboard.component.html',
  styleUrl: './admindashboard.component.scss'
})
export class AdmindashboardComponent {

}
