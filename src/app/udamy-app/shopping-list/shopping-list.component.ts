/**
 * Created by guptar16 on 8/07/2017.
 */
import {Component, OnInit} from '@angular/core';
import {Ingredient} from '../shared/models/Ingredient';
import {ShoppingListService} from './shopping-list.service';

@Component({
  selector: 'shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {

  constructor(private shoppingListService: ShoppingListService) { }

  ingredients: Ingredient[] = [];

  ngOnInit():void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients
      }
    );
  }

    onAddIngredient(ingredient: Ingredient) {
    this.shoppingListService.addIngredient(ingredient);
  }

}

