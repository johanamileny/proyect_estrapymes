import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './views/register/register.component';
import { HomepageComponent } from './views/homepage/homepage.component';
import { LoginComponent } from './views/login/login.component';
import { AuthGuard} from './shared/auth.guard';
import { AdmindashboardComponent } from './views/admindashboard/admindashboard.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { NavMenuAdministradorComponent } from './nav-menu-administrador/nav-menu-administrador.component';
import { UserComponent } from './views/user/user.component';
import { ChangePasswordComponent } from './views/change-password/change-password.component'; 
import { UserManagementComponent } from './componentes/user-management/user-management.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'homepage', component: HomepageComponent},
  { path: 'admindashboard', component:AdmindashboardComponent },
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  {path: 'nav-menu', component:NavMenuComponent},
  {path: 'nav-menu-administrador', component:NavMenuAdministradorComponent}
  {path: 'nav-menu-administrador', component:NavMenuAdministradorComponent},
  { path: 'change-password', component: ChangePasswordComponent },
  { path: 'user-management', component: UserManagementComponent },
  {path: 'user', component:UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



