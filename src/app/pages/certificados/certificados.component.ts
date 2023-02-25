import { Component } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { LocalstorageService } from '../../services/localstorage/localstorage.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { informe } from './interface/informe_interface';

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


  constructor(private api: ApiService, storage: LocalstorageService) {
    console.log("1");
  }

  ngOnInit(): void {
    console.log("2");
    this.loadTable();
  }

  loadTable() {
    let r = this.loadData();
    this.data = r;
    console.log(r);

  }

  dataSource(data = []) {
    let dataSource = new MatTableDataSource<informe>(data);
    return dataSource;
  }

  loadData() {
    return [
      {
        "Empresa": "CONSTRUCTORA SERVING S.A.S",
        "EmpresaNumero": "1",
        "TotalCertificados": 5,
        "ConfiguracionInformesPortalWeb": [
          {
            "Anio": 2018,
            "TipoInforme": "RETE ICA",
            "Periodicidad": "No Aplica",
            "PeriodoDisponible": "Anual"
          },
          {
            "Anio": 2020,
            "TipoInforme": "RETE IVA",
            "Periodicidad": "Cuatrimestral",
            "PeriodoDisponible": "Septiembre-Diciembre"
          },
          {
            "Anio": 2019,
            "TipoInforme": "RETE IVA",
            "Periodicidad": "Bimestral",
            "PeriodoDisponible": "Enero-Febrero"
          },
          {
            "Anio": 2021,
            "TipoInforme": "RETE IVA",
            "Periodicidad": "Cuatrimestral",
            "PeriodoDisponible": "Mayo-Agosto"
          },
          {
            "Anio": 2018,
            "TipoInforme": "RETE FUENTE",
            "Periodicidad": "No Aplica",
            "PeriodoDisponible": "Anual"
          }
        ]
      },
      {
        "Empresa": "PROMOTORA CASTILLANA S.A.S",
        "EmpresaNumero": "22",
        "TotalCertificados": 3,
        "ConfiguracionInformesPortalWeb": [
          {
            "Anio": 2018,
            "TipoInforme": "RETE ICA",
            "Periodicidad": "No Aplica",
            "PeriodoDisponible": "Anual"
          },
          {
            "Anio": 2020,
            "TipoInforme": "RETE IVA",
            "Periodicidad": "Bimestral",
            "PeriodoDisponible": "Julio-Agosto"
          },
          {
            "Anio": 2019,
            "TipoInforme": "RETE IVA",
            "Periodicidad": "Cuatrimestral",
            "PeriodoDisponible": "Septiembre-Diciembre"
          }
        ]
      }
    ];
  }

}
