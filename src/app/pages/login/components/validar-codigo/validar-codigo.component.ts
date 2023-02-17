import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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


  public validar: Restablecer = {
    codigo: '',
    clave: '',
    claveDos: ''
  }

  constructor(private _router: Router){}

  onSubmit(){
    console.log(this.validar.clave);
    if(this.validar.clave != this.validar.claveDos){
      this.alertas('Opps!', 'Las contraseñas no coinciden', 'error');
    }
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
