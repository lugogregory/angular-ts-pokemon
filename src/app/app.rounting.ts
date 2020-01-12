import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { PokemondetalleComponent } from './pokemondetalle/pokemondetalle.component'
import { HomeComponent } from './home/home.component'

const appRoutes: Routes = [
    { path:'', component: HomeComponent },
    { path:'home', component: HomeComponent },
    { path:'pokemondetalle/:id/:name', component: PokemondetalleComponent },
    { path:'**', component: HomeComponent }
];

export const appRoutingProviders: any[] = [];
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);
