import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfiliadosComponent } from './pages/afiliados/afiliados.component';
import { NegocioComponent } from './pages/negocio/negocio.component';

const routes: Routes = [
  {path: 'afiliados', component:AfiliadosComponent},
  {path:'negocio/:id', component:NegocioComponent},
  {path:'**',redirectTo:'afiliados'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
