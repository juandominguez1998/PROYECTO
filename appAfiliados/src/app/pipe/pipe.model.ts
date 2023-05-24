import { NgModule } from "@angular/core";
import { FiltroPipe } from "./filtro.pipe";
import { FiltrocincoPipe } from "./filtrocinco.pipe";
import { FiltrocuatroPipe } from "./filtrocuatro.pipe";
import { FiltrodosPipe } from "./filtrodos.pipe";
import { FiltroseisPipe } from "./filtroseis.pipe";
import { FiltrosietePipe } from "./filtrosiete.pipe";
import { FiltrotresPipe } from "./filtrotres.pipe";

@NgModule({
    declarations:[FiltroPipe,FiltrodosPipe,FiltrotresPipe,FiltrocuatroPipe,FiltrocincoPipe,FiltroseisPipe,FiltrosietePipe],
    exports:[FiltroPipe,FiltrodosPipe,FiltrotresPipe,FiltrocuatroPipe,FiltrocincoPipe,FiltroseisPipe,FiltrosietePipe]
})

export class PipeModule {

}