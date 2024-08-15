import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomepageComponent } from './views/homepage/homepage.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomepageComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // Asegúrate de usar `styleUrls` para una lista de estilos
})
export class AppComponent {
  title = 'estrapymes';
}
