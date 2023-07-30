import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipeList: Recipe[] = [
    new Recipe(
      "Grilled Salmon", 
      "This salmon is grilled and served with vegies", 
      "https://dummyimage.com/600x400/000/fff",
      [
        new Ingredient('garlic', 1/2),
        new Ingredient('butter', 1),
        new Ingredient('salt', .5)
      ]
    ), 
    new Recipe(
      "Beef Burger", 
      "A dish consisting of a round patty of ground beef", 
      "https://dummyimage.com/600x400/000/fff",
      [
        new Ingredient('garlic', 1/2),
        new Ingredient('butter', 1),
        new Ingredient('salt', .5)
      ]
    ),
    new Recipe(
      "Beef Salpicao", 
      "Beef Salpicao is a beef stir-fry dish flavored with Worcestershire, butter, garlic, and red chili pepper flakes.", 
      "https://dummyimage.com/600x400/000/fff",
      [
        new Ingredient('garlic', 1/2),
        new Ingredient('butter', 1),
        new Ingredient('salt', .5)
      ]
    )
  ];
  
  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipeList.slice();
  }

  addIngToShoppingList(ingredient: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredient);
  }
}
