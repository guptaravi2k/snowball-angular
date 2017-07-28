/**
 * Created by guptar16 on 8/07/2017.
 */
import { Component, Input, Output, EventEmitter, OnInit }       from '@angular/core';
import {Recipe} from "../../../shared/models/recipe";
import {RecipeService} from '../../recipe.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'recipe-item',
  templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent {

  @Input()
  recipe: Recipe;

  @Input()
  recipeIndex: number;

  constructor(private router:Router, private route: ActivatedRoute) {}
/*

  onRecipeItemClick() {
    this.router.navigate(['recipeDetails', this.recipeIndex], {relativeTo: this.route});
  }
*/

}
