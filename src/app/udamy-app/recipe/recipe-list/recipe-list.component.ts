/**
 * Created by guptar16 on 8/07/2017.
 */
import { Component, Input, Output, EventEmitter, OnInit }       from '@angular/core';
import {Recipe} from "../../models/recipe";

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  @Output()
    recipeEmitter = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe("chhole", "indian chickpeas", "https://2.bp.blogspot.com/-0VWDpip0Rx4/UA7nefIKzWI/AAAAAAAARRs/2hNodpGFavg/s640/cb+k.jpg"),
    new Recipe("kulche", "indian roadside dish", "https://2.bp.blogspot.com/-0VWDpip0Rx4/UA7nefIKzWI/AAAAAAAARRs/2hNodpGFavg/s640/cb+k.jpg")
  ];

  ngOnInit() {
    //this.recipeEmitter.emit(this.recipes[0])
  }

  onRecipeSelect(recipe: Recipe) {
    this.recipeEmitter.emit(recipe)
  }

}
