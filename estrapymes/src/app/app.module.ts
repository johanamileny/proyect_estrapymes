import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { AppComponent } from './app.component';




@NgModule({
  providers: [provideCharts(withDefaultRegisterables())],
  bootstrap: [],
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppModule { }





