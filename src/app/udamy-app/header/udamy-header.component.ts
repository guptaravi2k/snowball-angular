/**
 * Created by guptar16 on 8/07/2017.
 */
import { Component, Output, EventEmitter }       from '@angular/core';

@Component({
  selector: 'udamy-header',
  templateUrl: './udamy-header.component.html'
})
export class UdamyHeaderComponent {

  @Output()
  menuSelectEvent = new EventEmitter<number>();

  onRecipe() {
    this.menuSelectEvent.emit(0);
  }

  onShoppingList() {
    this.menuSelectEvent.emit(1);
  }
}
