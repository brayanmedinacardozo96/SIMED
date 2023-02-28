import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { LocalstorageService } from '../../services/localstorage/localstorage.service'


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {

  nameApp = "";
  nameUser = "";
  recordarClave = {
    claveActual: '',
    claveNueva: '',
    claveNueva2: '',
  };

  constructor(private _router: Router, private storage: LocalstorageService) {

  }

  ngOnInit(): void {

    if (this.storage.getData('user') != null) {
      this.nameUser = this.storage.getData('user').NombreCompleto;
    } else {
      this._router.navigate(['/']);
    }

    this.nameApp = environment.appName;

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
