import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Recipe } from "../shared/recipe.model";
import { DataStorage } from "./data-storage.service";
import { RecipeService } from "./recipe.service";

@Injectable({
  providedIn:'root'
})
export class RecipesResolverService  implements Resolve<Recipe[]>
{
  constructor(private dataStorage: DataStorage,
    private recipeService: RecipeService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    const recipes = this.recipeService.getRecipes();
    if(recipes.length === 0){
      return this.dataStorage.fetchRecipes();
    }
    else{
      return recipes;
    }
  }
}
