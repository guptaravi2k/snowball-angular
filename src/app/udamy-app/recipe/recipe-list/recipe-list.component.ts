/**
 * Created by guptar16 on 8/07/2017.
 */
import {Component, OnInit} from '@angular/core';
import {Recipe} from '../../shared/models/recipe';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {


  recipeList: Recipe[]  = [];

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipeList = this.recipeService.getRecipies();
  }

}
