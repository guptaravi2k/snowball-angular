import {Routes} from '@angular/router/router';
import {UdamyHomeComponent} from './udamy-home.component';
import {RecipesComponent} from './recipe/recipes.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RecipeDetailComponent} from './recipe/recipe-detail/recipe-detail.component';
import {SelectARecipeComponent} from './recipe/recipe-list/select-a-recipe/select-a-recipe.component';
import {RecipeEditComponent} from './recipe/recipe-edit/recipe-edit.component';


export const UDAMY_APP: Routes = [
  { path: 'udamyHome', component: UdamyHomeComponent, children: [
    {path: '', component: RecipesComponent},
    {path: 'recipe', component: RecipesComponent, children:[
      {path: '', component: SelectARecipeComponent},
      {path: 'recipeDetails/:id', component: RecipeDetailComponent},
      {path: 'selectARecipe', component: SelectARecipeComponent},
      {path: 'new', component: RecipeEditComponent},
      {path: 'edit/:id', component: RecipeEditComponent}
    ]},
    {path: 'shopping-list', component: ShoppingListComponent}
  ]}
];
