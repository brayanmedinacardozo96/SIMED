import { Injectable } from '@angular/core';
import *  as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  localStorage;
  key = "B96CZ*$1ZyMU?";

  constructor() {
    this.localStorage = window.localStorage;
  }

  public encrypt(txt: string): string {
    return CryptoJS.AES.encrypt(txt, this.key).toString();
  }

  private decrypt(txtToDecrypt: string) {
    return CryptoJS.AES.decrypt(txtToDecrypt, this.key).toString(CryptoJS.enc.Utf8);
  }

  public saveData(key: string, value: string) {
    localStorage.setItem(key, this.encrypt(value));
  }

  public getData(key: string) {
    try {
      let data = localStorage.getItem(key) || "{}";
      let result = this.decrypt(data);
      return JSON.parse(result);
    } catch (error) {
      return null;
    }

  }

  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  public clearData() {
    localStorage.clear();
  }

  public getDataEncrypt(key: string) {
    let data = localStorage.getItem(key) || "{}";
    return data;
  }


}
