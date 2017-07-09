/**
 * Created by guptar16 on 8/07/2017.
 */
import { Component }       from '@angular/core';
import {Ingredient} from "../models/Ingredient";

@Component({
  selector: 'shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  constructor() { }

  onAddIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

}

