import {Ingredient} from './Ingredient';
export class Recipe {
/*
  name: string;
  description: string;
  imagePath: string;
*/

  constructor(public name:string, public description:string, public imagePath:string, public ingredients: Ingredient[]) {}
}
