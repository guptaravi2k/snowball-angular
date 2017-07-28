import { Component, OnInit } from '@angular/core';
import {Recipe} from "../shared/models/recipe";
import {RecipeService} from './recipe.service';

@Component({
  selector: 'recipes',
  templateUrl: './recipes.component.html',
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    /*this.recipeService.recipeEmitter.subscribe(
      recipe => this.recipe = recipe
    );*/
  }

}
