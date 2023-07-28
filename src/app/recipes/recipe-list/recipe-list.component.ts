import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  
  recipeList: Recipe[] = [
    new Recipe(
      "Grilled Salmon", 
      "This salmon is grilled and served with vegies", 
      "https://dummyimage.com/600x400/000/fff" 
    ), new Recipe(
      "Grilled Salmon", 
      "This salmon is grilled and served with vegies", 
      "https://dummyimage.com/600x400/000/fff" 
    ),new Recipe(
      "Grilled Salmon", 
      "This salmon is grilled and served with vegies", 
      "https://dummyimage.com/600x400/000/fff" 
    )
  ];


  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
