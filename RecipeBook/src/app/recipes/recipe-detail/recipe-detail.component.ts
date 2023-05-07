import { Component, OnInit} from '@angular/core';
import { Recipe } from '../../shared/recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private shoppingList: ShoppingListService, private route: ActivatedRoute, private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params)=>{
      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipe(this.id);
      }
    );
  }

  addToShoppingList(ingredients : Ingredient[]){
    ingredients.forEach(element => {
      this.shoppingList.addIngredient(element);
    });
  }
}
