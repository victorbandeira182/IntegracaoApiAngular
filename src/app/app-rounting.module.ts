import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule',
  },
  {
    path: 'usuario',
    loadChildren: './usuario/usuario.module#UsuarioModule',
  },
  {
    path: 'estados',
    loadChildren: './estados/estados.module#EstadosModule',
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  }


];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {useHash: true})
  ]
})
export class AppRountingModule { }
