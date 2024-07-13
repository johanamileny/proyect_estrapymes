import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './views/register/register.component';
import { HomepageComponent } from './views/homepage/homepage.component';
import { LoginComponent } from './views/login/login.component';
import { CanActivateUser } from './shared/auth.guard'; 

export const routes: Routes = [
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'homepage',
        component: HomepageComponent,
       
    },
    {
        path: '',
        redirectTo: 'register', // Cambiado para redirigir al registro por defecto
        pathMatch: 'full'
    },
    {
        path: '**', // Ruta para manejar cualquier ruta no encontrada
        redirectTo: 'register'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
