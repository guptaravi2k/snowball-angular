import {Recipe} from '../shared/models/recipe';
import {EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/models/Ingredient';

export class RecipeService {

  private recipeList: Recipe[] = [
    new Recipe("chhole",
               "indian chickpeas",
               "https://2.bp.blogspot.com/-0VWDpip0Rx4/UA7nefIKzWI/AAAAAAAARRs/2hNodpGFavg/s640/cb+k.jpg",
               [new Ingredient("chickpeas", 1), new Ingredient("onion", 20)]),

    new Recipe("kulche",
               "indian roadside dish",
               "http://cdn.inhouserecipes.com/wp-content/uploads/2011/6/chhole%20kulche.jpg",
               [new Ingredient("bread", 1), new Ingredient("garlic", 10)])

  ];

  recipeEmitter: EventEmitter<Recipe> = new EventEmitter();

  getRecipies() {
    return this.recipeList.slice();
  }

  getRecipe(index: number) {
    return this.getRecipies()[index];
  }

}
