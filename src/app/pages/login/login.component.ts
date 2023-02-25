import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ApiService } from '../../services/api/api.service';
import { LocalstorageService } from '../../services/localstorage/localstorage.service';
import { environment } from "../../../environments/environment";
import { SnackBarService } from "../../services/snackbar/snackbar.service"
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  numeroDocumento: boolean = true;
  codigo: boolean = false;
  nuevaContra: boolean = false;
  recordarContra = {
    numeroDocumento: '',
    codigo: ''
  };

  nameApp: string = ""

  constructor(private _router: Router,
    private api: ApiService,
    private storage: LocalstorageService,
    private snackBar: SnackBarService) { }

  ngOnInit() {
    this.nameApp = environment.appName;
  }


  async ingresar(f: NgForm) {

    let response = await this.api.post(environment.api, 'ProveedorPortalWeb/autenticar', { "Nit": f.value.email, "Clave": f.value.password });
    if (response.error != undefined) {
      this.snackBar.alert("Problemas con la conexión al servidor.")
      return;
    }
    if (response.Data == null) {
      this.snackBar.alert(response.Mensaje);
      return;
    }

    this.storage.saveData('user', JSON.stringify(response.Data));
    this._router.navigate(['/inicio']);

  }

  enviarDocumuento() {
    if (this.recordarContra.numeroDocumento == '') {
      this.alertas('Error!', 'Ingrese su número de documento', 'error');
    } else if (this.recordarContra.numeroDocumento) {
      this.numeroDocumento = false;
      this.codigo = true;
      this.recordarContra.numeroDocumento = '';
    }
  }

  enviarCodigo() {
    if (this.recordarContra.codigo == '') {
      this.alertas('Error', 'Ingrese el codigo enviado', 'error');
    } else if (this.recordarContra.codigo) {
      this.nuevaContra = true;
      this.codigo = false;
    }
  }

  guardarContra() {
    this.numeroDocumento = true;
    this.codigo = false;
    this.nuevaContra = false;
  }

  // enviar al componente de recuperar-clave
  recuperarClave() {
    this._router.navigate(['/recuperar-clave']);
  }

  alertas(title: string, text: string, icon: any) {
    Swal.fire({
      title: title,
      text: text,
      icon: icon,
      confirmButtonText: 'Ok!'
    })
  }
}
