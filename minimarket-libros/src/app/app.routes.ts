import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Home } from './components/home/home';
import { ListaLibros } from './components/lista-libros/lista-libros';

export const routes: Routes = [
{ path: '', component: Login },
{ path: 'home', component: Home },
{ path: 'libros', component: ListaLibros }
];
