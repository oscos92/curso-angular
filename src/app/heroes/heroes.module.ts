import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule(
    {
        declarations:[
            HeroeComponent,
            ListadoComponent
        ], // componentes que contiene el modulo

        exports:
        [
            ListadoComponent // modulos visibles fuera de este modulo o cosas que quiero hacer publicas
        ],
        imports:
        [
            CommonModule

        ] //modulos

    }
)


export class HeroesModule
{

}