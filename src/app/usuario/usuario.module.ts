import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UsuarioComponent} from './usuario.component';
import {UsuarioRoutingModule} from './usuario-routing.module';
import {UsuarioCadastroComponent} from './cadastro/usuario-cadastro.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/Inputtext';



@NgModule({
  declarations: [UsuarioComponent , UsuarioCadastroComponent],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    TableModule,
    ButtonModule,
    InputTextModule
  ]
})
export class UsuarioModule { }
