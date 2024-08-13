import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { AppComponent } from './app.component';
import { UserManagementModule } from './componentes/user-management/user-management.module';




@NgModule({
  providers: [provideCharts(withDefaultRegisterables())],
  bootstrap: [],
  declarations: [UserManagementModule],
  imports: [
    CommonModule,
    
  ]
})
export class AppModule { }





