import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {FormsModule} from '@angular/forms';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {routing, appRoutingProviders} from './app.rounting';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import {peticionesServices} from './services/peticiones.services'

import { AppComponent } from './app.component';
import { PokemondetalleComponent } from './pokemondetalle/pokemondetalle.component';
import { HomeComponent } from './home/home.component';
import { cardPokemon } from './card/card.component';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    AppComponent,
    PokemondetalleComponent,
    HomeComponent,
    cardPokemon
],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    MatCardModule,
    FormsModule,
    InfiniteScrollModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [appRoutingProviders, peticionesServices],
  bootstrap: [AppComponent]
})
export class AppModule { }