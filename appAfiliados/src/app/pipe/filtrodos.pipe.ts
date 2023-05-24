import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrodos'
})
export class FiltrodosPipe implements PipeTransform {
  transform(value2: any, arg2: any): any {
    const buscarporcategorias=[];
    for(const recorrido of value2){
     if (recorrido.categoria.toLowerCase().indexOf(arg2.toLowerCase())> -1){
       buscarporcategorias.push(recorrido);
     }
    }
    return buscarporcategorias;
 }

}
