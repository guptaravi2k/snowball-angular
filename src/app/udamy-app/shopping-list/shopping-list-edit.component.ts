/**
 * Created by guptar16 on 8/07/2017.
 */
import {Component, ViewChild, ElementRef, Output, EventEmitter}       from '@angular/core';
import {Ingredient} from "../models/Ingredient";

@Component({
  selector: 'shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html'
})
export class ShoppingListEditComponent {

  @Output()
  ingredientEmitter = new EventEmitter<Ingredient>();

  @ViewChild('name')
  name: ElementRef;

  @ViewChild('amount')
  amount: ElementRef;


  onAdd() {
    this.ingredientEmitter.emit(new Ingredient(this.name.nativeElement.value, this.amount.nativeElement.value));

  }

  onDelete() {

  }

  onClear() {

  }

}
