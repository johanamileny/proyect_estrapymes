import { Routes } from '@angular/router';
import { RegisterComponent } from './view/register/register.component';
import { HomepageComponent } from './view/homepage/homepage.component';
export const routes: Routes = [

      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'homepage',
        component: HomepageComponent
      },
      {
        path: '',
        redirectTo: 'homepage',
        pathMatch: 'full'
      }
];      

