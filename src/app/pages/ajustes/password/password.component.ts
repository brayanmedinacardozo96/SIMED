import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/services/api/api.service';
import { LocalstorageService } from 'src/app/services/localstorage/localstorage.service';
import { SnackBarService } from 'src/app/services/snackbar/snackbar.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent {
  recordarClave = {
    claveActual: '',
    claveNueva: '',
    claveNueva2: '',
  };

  constructor(private api: ApiService,
    private storage: LocalstorageService,
    private snackBar: SnackBarService) {
  }


  async guardar(f: NgForm) {

    let user = this.storage.getData('user');
    let pwss = this.storage.getData('pwss');
    let passwordActual = f.value.claveActual; //this.storage.encrypt(f.value.claveActual);
    console.log(passwordActual, pwss);
    if (passwordActual != pwss) {
      this.snackBar.alert("Contraseña actual no es correcta.")
      return;
    }

    if (f.value.claveNueva != f.value.claveNueva2) {
      this.snackBar.alert("Las contraseñas no coinciden.")
      return;
    }

    let response = await this.api.post(environment.api, 'ProveedorPortalWeb/cambiarClave', { "Nit": user.Identificacion, "ClaveNueva": f.value.claveNueva2 });
    if (response.error != undefined) {
      this.snackBar.alert("Problemas con la conexión al servidor.")
      return;
    }

    this.snackBar.alert(response.Mensaje);

  }
}
