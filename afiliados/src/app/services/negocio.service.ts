import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NegocioService {
//https://negociosapp-e5fe0-default-rtdb.firebaseio.com/negocio/prod-1.json
  constructor(public http: HttpClient) { 
   
  }
  public cargar_negocio(cod:string){
    return this.http.get(`https://negociosapp-e5fe0-default-rtdb.firebaseio.com/negocio/${cod}.json`);
  }
}
