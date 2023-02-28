import { Component } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { LocalstorageService } from '../../services/localstorage/localstorage.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { informe } from './interface/informe_interface';
import { environment } from 'src/environments/environment';
import { SnackBarService } from 'src/app/services/snackbar/snackbar.service';

@Component({
  selector: 'app-certificados',
  templateUrl: './certificados.component.html',
  styleUrls: ['./certificados.component.css']
})
export class CertificadosComponent {

  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  expandedIndex = 0;
  data = [
    {
      Empresa: '',
      EmpresaNumero: '',
      TotalCertificados: 0,
      ConfiguracionInformesPortalWeb: [
        {
          Anio: 0,
          TipoInforme: '',
          Periodicidad: '',
          PeriodoDisponible: ''
        }
      ]
    }
  ]


  constructor(private api: ApiService,
    private storage: LocalstorageService,
    private snackBar: SnackBarService) {

  }

  ngOnInit(): void {
    this.loadTable();
  }

  async loadTable() {

    let user = this.storage.getData('user');

    let response = await this.api.get(environment.api, '/configuracionInformePortalWeb', `nit=${user.Identificacion}`);

    if (response.Data == null) {
      this.snackBar.alert(response.Mensaje);
      return;
    }

    response.Data.forEach((element: { ConfiguracionInformesPortalWeb: any[]; }) => {
      let item = element.ConfiguracionInformesPortalWeb.sort((firstItem: any, secondItem: any) => secondItem.Anio - firstItem.Anio);
      element.ConfiguracionInformesPortalWeb = item;
    });


    this.data = response.Data;

  }

  async goPrint(item: any, data: any) {

    let method = '';

    if (item['TipoInforme'] == 'RETE IVA') {
      method = 'CertificadoIVA'
    }
    if (item['TipoInforme'] == 'RETE ICA') {
      method = 'CertificadoICA'
    }

    if (item['TipoInforme'] == 'RETE FUENTE') {
      method = 'CertificadoRetFuente'
    }

    let user = this.storage.getData('user');

    let response = await this.api.post(environment.api, method, {
      Empresa: data.EmpresaNumero,
      Anio: item.Anio,
      Periodo: item.PeriodoDisponible,
      Nit: user.Identificacion
    });


    if (response == null) {
      this.snackBar.alert("Problemas con la conexión al servidor.");
      return;
    }

    this.snackBar.alert(response.Mensaje);

    if (response.Data == null) {
      return;
    }

    this.downloadPDF(response.Data, `${item.Anio}_${item.TipoInforme}_${data.Empresa}`);

  }


  downloadPDF(pdf: string, name: string) {
    const linkSource = `data:application/pdf;base64,${pdf}`;
    const downloadLink = document.createElement("a");
    const fileName = `${name}.pdf`;
    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
  }




}
