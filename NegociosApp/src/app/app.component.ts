import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo: string='AFILIADOS';
  descripcion: string=' estos son los negocios y servicios que ya cuentan con su marketing digital';
  año=new Date().getFullYear();
nombreEmpresa: string='Negocios Teapa';
  constructor(){
   
  }
 
}
