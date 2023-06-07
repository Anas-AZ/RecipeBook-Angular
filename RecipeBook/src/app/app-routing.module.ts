import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesRoutingModule } from './recipes/recipes-routing.module';

const routes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
