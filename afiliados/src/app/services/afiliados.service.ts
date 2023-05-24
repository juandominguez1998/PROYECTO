import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Afiliado } from '../interfaces/afiliado.model';
import { Afiliados, Categoria, Zonas } from '../interfaces/afiliados.interface';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AfiliadosService {

afiliados: Afiliado[]  =[];
zonas : Zonas[]=[];
categorias: Categoria[]=[];

  constructor(private http: HttpClient) {
    this.cargar_afiliados();
    this. cargarZonas();
    this. cargarCategorias();
     }

  cargar_afiliados() {
    
    this.http.get<Afiliados[]>('https://negociosapp-e5fe0-default-rtdb.firebaseio.com/afiliados.json')
   .pipe(
    map(resp=>{
      return resp.map(resp=>Afiliado.afiliadosDelJson(resp))
    })
   )
    .subscribe((resp)=>{
       this.afiliados= resp;
       console.log(this.afiliados);
    });
  }


  cargarZonas(){
    this.http.get('https://negociosapp-e5fe0-default-rtdb.firebaseio.com/zonas.json')
    .subscribe((resp:any)=>{
     this.zonas=resp;
     console.log(this.zonas);
    });
  }


  cargarCategorias(){
    this.http.get('https://negociosapp-e5fe0-default-rtdb.firebaseio.com/categorias.json')
    .subscribe((resp:any)=>{
     this.categorias=resp;
     console.log(this.categorias);
    });
  }
}
