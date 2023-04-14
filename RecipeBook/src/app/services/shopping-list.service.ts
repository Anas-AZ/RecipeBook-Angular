import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  constructor() { }

  getIngredients(){
    return this.ingredients.slice();
    // slice returns copy of array, otherwise the array is returned as reference.
  }

  addIngredient(ingredient: Ingredient){

    const existingIngredientIndex = this.ingredients.findIndex(
      (i) => i.name === ingredient.name
    );

    if (existingIngredientIndex !== -1) {
      // If the ingredient already exists in the array, increase its frequency
      this.ingredients[existingIngredientIndex].amount += ingredient.amount;
    } else {
      // If the ingredient does not exist in the array, add it as a new item
      this.ingredients.push(ingredient);
    }
    
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
