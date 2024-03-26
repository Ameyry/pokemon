import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage {
  
  email: string = '';
  contraseña: string = '';

  constructor() { }

  guardarCambios() {
    console.log(this.email, this.contraseña);
  }
}
