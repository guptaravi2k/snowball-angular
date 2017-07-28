/**
 * Created by guptar16 on 8/07/2017.
 */
import {Component, ViewChild, ElementRef} from '@angular/core';
import {Ingredient} from '../shared/models/Ingredient';
import {ShoppingListService} from './shopping-list.service';

@Component({
  selector: 'shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html'
})
export class ShoppingListEditComponent {

  @ViewChild('name')
  name: ElementRef;

  @ViewChild('amount')
  amount: ElementRef;


  constructor(private shoppingListService: ShoppingListService) {}

  onAdd() {
      this.shoppingListService.addIngredient(new Ingredient(this.name.nativeElement.value, this.amount.nativeElement.value));
  }

  onDelete() {

  }

  onClear() {

  }

}
