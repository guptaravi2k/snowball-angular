/**
 * Created by guptar16 on 8/07/2017.
 */
import { Component, Input }       from '@angular/core';
import {Recipe} from "../../models/recipe";

@Component({
  selector: 'recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent {

  @Input()
  recipe: Recipe;

}
