import { Component } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-perfilU',
  templateUrl: './perfilU.page.html',
  styleUrls: ['./perfilU.page.scss'],
})
export class MenuPage  {
  router: any;

  constructor() { }

  

  navegarAPerfil() {
    this.router.navigate(['/perfil']);
  }
}
