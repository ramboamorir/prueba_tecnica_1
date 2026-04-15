import { Routes } from '@angular/router';
import { Home } from './components/pages/home/home';
import { LoginComponent } from './components/pages/login/login';
import { RegisterComponent } from './components/pages/register/register';
import { UsersComponent } from './components/pages/users/users';
import { PageNotFound } from './components/pages/page-not-found/page-not-found';

export const routes: Routes = [
  { path: "inicio", component: Home, title: 'Inicio' },
  { path: "usuarios", component: UsersComponent, title: 'Usuarios' },
  { path: 'login', component: LoginComponent, title: 'Login'},
  { path: 'register', component: RegisterComponent, title: 'Registro'},
  { path: '', redirectTo: '/inicio', pathMatch:'full'},
  { path: '**',  component: PageNotFound, title: 'Error 404' },
];
