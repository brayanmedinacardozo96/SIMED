import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


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

  constructor(private _router: Router) {}

  ngOnInit() {}

  ingresar() {
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
    if(this.recordarContra.codigo==''){
      this.alertas('Error', 'Ingrese el codigo enviado', 'error');
    }else if(this.recordarContra.codigo){
      this.nuevaContra = true;
      this.codigo = false;
    }
  }

  guardarContra() {
    this.numeroDocumento = true;
    this.codigo = false;
    this.nuevaContra = false;
  }

  alertas(title: string, text: string, icon: any){
     Swal.fire({
      title: title,
      text: text,
      icon: icon,
      confirmButtonText: 'Ok!'
    })
  }
}
