import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AfiliadosService } from 'src/app/services/afiliados.service';

@Component({
  selector: 'app-sucursal',
  templateUrl: './sucursal.page.html',
  styleUrls: ['./sucursal.page.scss'],
})
export class SucursalPage implements OnInit {

  detalles:any =[];
  id: any;
 
  constructor(private route:ActivatedRoute, private as:AfiliadosService) { }
 
  ngOnInit() {
    this.route.params.subscribe( parametros => {
      this.as.cargar_detlles( parametros['id']).subscribe( (detalles:any) => {
        this.id = parametros['id'];
        this.detalles = detalles;
        console.log(this.detalles);
      });
    });
  }
 

}
