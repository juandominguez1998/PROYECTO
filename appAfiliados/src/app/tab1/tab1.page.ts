import { Component } from '@angular/core';
import { AfiliadosService } from '../services/afiliados.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
afiliados:any[]=[];
buscarporlugar='';
buscarporcategorias='';



  constructor(public afiliadosservice:AfiliadosService) {
    this.cargar_afiliados();
    this.afiliadosservice.cargar_zonas();
    this.afiliadosservice.cargar_categorias();

  }

  cargar_afiliados(){
    this.afiliadosservice.cargar_afiliados().subscribe((resp:any)=>{
  this.afiliados=resp;
  console.log(this.afiliados);
    })
  }
}
