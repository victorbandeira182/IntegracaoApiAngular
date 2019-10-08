import { Injectable } from '@angular/core';
import {Usuario} from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  public getUsuario() {
    const usuario = new Usuario();
    usuario.nome = 'Victor';
    usuario.email = 'victorbandeira182@gmail.com';

    return usuario;

  }

  public listaUsuario(): Usuario[] {
    return [
      {
        nome: 'victor',
        email: 'victorbandeira182@gmail.com'
      },
      {
        nome: 'ronaldo',
        email: 'ronaldoa182@gmail.com'
      },
      {
        nome: 'maria',
        email: 'maria182@gmail.com'
      },
      {
        nome: 'jairo',
        email: 'jairo182@gmail.com'
      },
    ];


  }

}
