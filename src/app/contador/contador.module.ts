import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ContadorComponent } from "./contador/contador.component";


@NgModule(
    {
        declarations:[
            ContadorComponent
        ], // componentes que contiene el modulo

        exports:
        [
            ContadorComponent // modulos visibles fuera de este modulo o cosas que quiero hacer publicas
        ],
        imports:
        [
            CommonModule

        ] //modulos

    }
)


export class ContadorModule
{

}