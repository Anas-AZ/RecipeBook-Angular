import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RecipeService } from "./recipe.service";
import { Recipe } from "../shared/recipe.model";

@Injectable({
  providedIn: 'root'
})

export class DataStorage{

  constructor(private http: HttpClient,
    private recipeService: RecipeService) {

  }

  storeRecipes(){
    const recipes = this.recipeService.getRecipes();
    this.http.put('https://ng-recipebook-2f304-default-rtdb.firebaseio.com/recipes.json', recipes)
    .subscribe((response)=>{
      console.log(response);
    });
  }

  fetchRecipes(){
    this.http.get<Recipe[]>('https://ng-recipebook-2f304-default-rtdb.firebaseio.com/recipes.json')
    .subscribe((recipes)=>{
      this.recipeService.setRecipes(recipes);
    })
  }
}
