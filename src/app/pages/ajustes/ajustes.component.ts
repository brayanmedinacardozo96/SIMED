import { Component } from '@angular/core';
import { LocalstorageService } from '../../services/localstorage/localstorage.service'

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.component.html',
  styleUrls: ['./ajustes.component.css']
})
export class AjustesComponent {

  data = {
    Identificacion: '',
    NombreCompleto: '',
    Contacto: '',
    Direccion: '',
    Correo: '',
    Telefonos: ''
  }

  constructor(private storage: LocalstorageService) {

  }

  ngOnInit(): void {
    if (this.storage.getData('user') == null) {
      return;
    }
    let data = this.storage.getData('user');
    let telefono = "";
    data.Telefonos.forEach((element: string) => {
      if (element != "") {
        telefono += telefono == "" ? element : " - ".concat(element);
      }
    });
    this.data = data;
    this.data.Telefonos = telefono;

  }

}
