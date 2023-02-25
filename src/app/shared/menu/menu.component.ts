import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { LocalstorageService } from '../../services/localstorage/localstorage.service'


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {

  nameUser = "";
  recordarClave = {
    claveActual: '',
    claveNueva: '',
    claveNueva2: '',
  };

  constructor(private storage: LocalstorageService) {
    this.nameUser = storage.getData('user').NombreCompleto;
  }

  guardar() {
    console.log(this.recordarClave);
    if (this.recordarClave.claveNueva === this.recordarClave.claveNueva2) {
    } else {
      this.alertas('Error', 'Las contraseñas no son iguales', 'error');
    }
  }

  alertas(title: string, text: string, icon: any) {
    Swal.fire({
      title: title,
      text: text,
      icon: icon,
      confirmButtonText: 'Ok!',
    });
  }
}
