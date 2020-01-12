import {Component, Input} from '@angular/core';

@Component({
  selector: 'card-pokemon',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css', '../css/style.css'],
})

export class cardPokemon {
  @Input() Pokemon;

  constructor(){
    
  }

}
