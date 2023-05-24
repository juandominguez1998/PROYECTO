import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any, arg: any): any {
     const buscarporlugar=[];
     for(const recorrido of value){
      if (recorrido.lugar.toLowerCase().indexOf(arg.toLowerCase())> -1){
        buscarporlugar.push(recorrido);
      }
     }
     return buscarporlugar;
  }


  
}
