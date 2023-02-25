import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../../../environments/environment'
import { ApiService } from 'src/app/services/api/api.service';
import { SnackBarService } from 'src/app/services/snackbar/snackbar.service';
import { LocalstorageService } from 'src/app/services/localstorage/localstorage.service';

@Component({
  selector: 'app-recuperar-clave',
  templateUrl: './recuperar-clave.component.html',
})
export class RecuperarClaveComponent {

  // obtener el dato del input
  public codigo: string = '';
  nameApp: string = '';

  constructor(private _router: Router,
    private api: ApiService,
    private snackBar: SnackBarService,
    private storage: LocalstorageService) { }

  ngOnInit(): void {
    this.nameApp = environment.appName;
  }

  async validarCodigo() {


    let response = await this.api.post(environment.api, 'ProveedorPortalWeb/codigoRecuperacion', { "Nit": this.codigo });
    if (response.error != undefined) {
      this.snackBar.alert("Problemas con la conexión al servidor.")
      return;
    }
    if (response.Data == null) {
      this.snackBar.alert(response.Mensaje);
      return;
    }

    if (response.Data == null) {
      this.snackBar.alert(response.Mensaje);
      return;
    }

    this.snackBar.alert(`${response.Mensaje}, al correo ${response.Data.CorreoTercero}`);
    this.storage.saveData('code', JSON.stringify(response.Data));
    this.storage.saveData('nit', this.codigo);
    this._router.navigate(['/validar-codigo']);

  }

}
