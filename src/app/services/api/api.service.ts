import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalConstants } from './global-constants';
import { response } from '../interface/response';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ApiService {

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    })
  };

  constructor(private http: HttpClient) { } //, private snackBar: MatSnackBar


  async post(base: string, method: string, params: object) {

    GlobalConstants.showLoading = true;

    let response = await firstValueFrom(this.http.post(`${base}${method}`,
      params, this.httpOptions
    )).then((value) => {
      return value;
    }).catch((err) => {
      return err;
    });

    GlobalConstants.showLoading = false;

    return response;


  }


}


