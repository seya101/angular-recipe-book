import { Component, OnInit } from '@angular/core';

import { Recipe } from "../recipe.model";
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  recipeList: Recipe[] = [];


  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){
    this.recipeList = this.recipeService.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate(['new-recipe'], {relativeTo: this.route})
  }

}