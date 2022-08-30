import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})


//el oninit s e utiliza para inicializar cosas
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];
  heroeBorrado: string  = '';


  borrarHeroe()
  {
    this.heroeBorrado = this.heroes.shift() || '';
    
  }



}
