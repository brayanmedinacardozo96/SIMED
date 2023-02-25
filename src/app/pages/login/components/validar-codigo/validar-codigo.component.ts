import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { environment } from '../../../../../environments/environment'
import { ApiService } from 'src/app/services/api/api.service';
import { SnackBarService } from 'src/app/services/snackbar/snackbar.service';
import { LocalstorageService } from 'src/app/services/localstorage/localstorage.service';
import { NgForm } from '@angular/forms';


interface Restablecer {
  codigo: string;
  clave: string;
  claveDos: string;
}

@Component({
  selector: 'app-validar-codigo',
  templateUrl: './validar-codigo.component.html'
})
export class ValidarCodigoComponent {

  errorMachtClave: boolean = false;

  public validar: Restablecer = {
    codigo: '',
    clave: '',
    claveDos: ''
  }

  nameApp: string = '';

  constructor(private _router: Router,
    private api: ApiService,
    private snackBar: SnackBarService,
    private storage: LocalstorageService,
  ) { }

  ngOnInit(): void {
    this.nameApp = environment.appName;
  }

  async onSubmit(f: NgForm) {

    if (f.value.clave != f.value.claveDos) {
      this.snackBar.alert("Las contraseñas no coinciden.")
      return;
    }

    let codido = this.storage.getData('code');
    if (codido.CodigoRecuperacion != f.value.codigo) {
      this.snackBar.alert("Código ingresado no es válido, verifique su correo electrónico.")
      return;
    }

    let nit = this.storage.getData('nit');
    let response = await this.api.post(environment.api, 'ProveedorPortalWeb/cambiarClave', { "Nit": nit, "ClaveNueva": f.value.claveDos });
    if (response.error != undefined) {
      this.snackBar.alert("Problemas con la conexión al servidor.")
      return;
    }

    if (response.Mensaje == "Clave actualizada con éxito") {
      this.alertas("Contraseña", response.Mensaje, null);
    } else {
      this.snackBar.alert(response.Mensaje);
    }


  }


  alertas(title: string, text: string, icon: any) {
    Swal.fire({
      title: title,
      text: text,
      confirmButtonText: 'Ok',
    }).then(() => {
      this._router.navigate(['/']);
    });
  }

}
