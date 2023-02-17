import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar-clave',
  templateUrl: './recuperar-clave.component.html',
})
export class RecuperarClaveComponent {

  // obtener el dato del input 
  public codigo: string ='';

  constructor(private _router: Router){}

  validarCodigo(){
    console.log(this.codigo);
    this._router.navigate(['/validar-codigo']);
  }

}
