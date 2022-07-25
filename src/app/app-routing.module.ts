import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeDetailComponent } from './components/poke-detail/poke-detail.component';
import { PokeTableComponent } from './components/poke-table/poke-table.component';
import { PokeDetailTypeComponent } from './poke-detail-type/poke-detail-type.component';

const routes: Routes = [
  {path: 'home', component: PokeTableComponent},
  {path: 'pokeDetail/:id', component: PokeDetailComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: '**', pathMatch: 'full', redirectTo: 'home'},
  {path: 'pokeDetailType/:id', component: PokeDetailTypeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
