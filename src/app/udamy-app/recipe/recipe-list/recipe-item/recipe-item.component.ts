/**
 * Created by guptar16 on 8/07/2017.
 */
import { Component, Input, Output, EventEmitter, OnInit }       from '@angular/core';
import {Recipe} from "../../../models/recipe";

@Component({
  selector: 'recipe-item',
  templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent {

  @Input()
  recipe: Recipe;

  @Output()
  recipeItemEmitter= new EventEmitter<Recipe>();

  onRecipeItemClick() {
    this.recipeItemEmitter.emit(this.recipe)
  }

}
