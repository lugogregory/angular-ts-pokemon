import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class peticionesServices {
    
    constructor(
        private _http:HttpClient
    ){ }
    
    getPokemon(url:string):Observable<any>{
        return this._http.get(url);
    }



}
