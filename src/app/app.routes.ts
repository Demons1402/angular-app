import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Nosotros } from './pages/nosotros/nosotros';
import { Login } from './pages/login/login';
import { Productos } from './pages/productos/productos';
import { Demo } from './pages/demo/demo';

export const routes: Routes = [
    { path: '', component: Home, pathMatch: 'full' },
    { path: 'nosotros', component: Nosotros },
    { path: 'login', component: Login },
  { path: 'productos', component: Productos},
  { path: 'demo', component: Demo }
];
