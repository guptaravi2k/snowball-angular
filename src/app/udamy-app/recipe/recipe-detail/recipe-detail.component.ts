/**
 * Created by guptar16 on 8/07/2017.
 */
import {Component, Input, OnInit}       from '@angular/core';
import {Recipe} from "../../shared/models/recipe";
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private shoppingListService: ShoppingListService, private recipeService: RecipeService, private route: ActivatedRoute) {}


  ngOnInit():void {

    this.route.params.subscribe(
      (param: Params) => {
        this.id = +param['id'];
        this.recipe = this.recipeService.getRecipe(param['id']);
      }
    )
  }

  toShoppingList() {
    this.shoppingListService.addIngredients(this.recipe.ingredients);
  }

}
