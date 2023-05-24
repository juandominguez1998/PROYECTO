import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AfiliadosService {

  categorias:any=[];
  zonas:any =[];

  constructor(private http:HttpClient) { 
  
  }

  cargar_afiliados(){
    return this.http.get('https://negociosapp-e5fe0-default-rtdb.firebaseio.com/afiliados.json')
  }

  cargar_detlles(cod:string){
    return this.http.get(`https://negociosapp-e5fe0-default-rtdb.firebaseio.com/negocio/${cod}.json`)
  }

  cargar_categorias(){
   this.http.get('https://negociosapp-e5fe0-default-rtdb.firebaseio.com/categorias.json')
   .subscribe((resp:any)=>{
    this.categorias=resp;
    console.log(this.categorias);
   });
 }
  cargar_zonas(){
    this.http.get('https://negociosapp-e5fe0-default-rtdb.firebaseio.com/zonas.json')
    .subscribe((resp:any)=>{
     this.zonas=resp;
     console.log(this.zonas);
    });
 
 
   }
}
