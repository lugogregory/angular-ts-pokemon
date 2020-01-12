import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {pokemon} from './pokemon';
import {peticionesServices} from '../services/peticiones.services';

@Component({
  selector: 'app-pokemondetalle',
  templateUrl: './pokemondetalle.component.html',
  styleUrls: ['./pokemondetalle.component.css', '../css/style.css'],
  providers: [peticionesServices]
})

export class PokemondetalleComponent implements OnInit {
  public Pokemon:pokemon;
  public url:Array<string>;
  
  
  constructor(
    private _route:ActivatedRoute,
    private _router:Router,
    private _peticionesServices: peticionesServices
  ) { }

  ngOnInit() {
    //Recepcion de parametros desde Home
    this._route.params.forEach((
      params:Params)=>{
        this.Pokemon = new pokemon();
        this.Pokemon.nombre=params['name'];
        this.Pokemon.id=params['id'];
      }
    );
    
    //Carga de URL para caracteristicas y habilidades
    this.url =['https://pokeapi.co/api/v2/ability/'+ this.Pokemon.id, 'https://pokeapi.co/api/v2/characteristic/'+ this.Pokemon.id];
  
    //Peticion HTTP para los Hobbies
    this._peticionesServices.getPokemon(this.url[0]).subscribe(
      result => {
        if(!result){
          console.log ("Este pokemon no posee habilidades");
        }else{
          this.Pokemon.efecto=result.effect_entries[0].effect;
        }
     },
      error => {
        console.log ("Este pokemon no posee habilidades");
    })

    //Peticion HTTP para los Efectos
    this._peticionesServices.getPokemon(this.url[1]).subscribe(
      result => {
        if(!result){
          console.log ("Este pokemon no posee hobbies");
        } else{
          this.Pokemon.hobbie=result.descriptions[1].description;
        }
     },
      error => {
        console.log ("Este pokemon no posee hobbies");
    })

  }// Fin método OnInit

}// Fin de la clase
