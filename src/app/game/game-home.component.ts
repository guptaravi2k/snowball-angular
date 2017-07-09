import { Component }       from '@angular/core';

@Component({
  selector: 'game-home',
  template: `
    <app-game-controller (counterEmitter)="onCounterEvent($event)"></app-game-controller>
    <br>
    <app-even *ngFor="let count of evenEvents" [number] = count></app-even>
    <app-odd *ngFor="let count of oddEvents" [number] = count></app-odd>
  `,
  styleUrls: ['../app.component.css']
})
export class GameHomeComponent {
  title = 'Game Home';
  evenEvents = [];
  oddEvents = [];

  onCounterEvent(count: number) {
    if (count %2 === 0) {
      this.evenEvents.push(count);
    } else {
      this.oddEvents.push(count);
    }
  }
}
