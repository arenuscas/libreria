import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Home } from './components/home/home';
import { ListaLibros } from './components/lista-libros/lista-libros';
import { PanelAdmin } from './components/panel-admin/panel-admin';
import { PanelEmpleado } from './components/panel-empleado/panel-empleado';
import { CrearEmpleado } from './components/crear-empleado/crear-empleado';
import { GestionLibros } from './components/gestion-libros/gestion-libros';

export const routes: Routes = [
  { path: '', component: Login },
  { path: 'home', component: Home },
  { path: 'libros', component: ListaLibros },
  { path: 'admin', component: PanelAdmin },
  { path: 'empleado', component: PanelEmpleado },
  { path: 'crear-empleado', component: CrearEmpleado },
  { path: 'gestion-libros', component: GestionLibros }
];
