import { Component, OnInit } from '@angular/core';
import {Recipe} from "../models/recipe";

@Component({
  selector: 'recipes',
  templateUrl: './recipes.component.html'
})
export class RecipesComponent implements OnInit {

  recipe: Recipe;

  constructor() { }

  ngOnInit() {
  }
  onRecipeSelect(recipe: Recipe) {
    this.recipe = recipe;
  }

}
