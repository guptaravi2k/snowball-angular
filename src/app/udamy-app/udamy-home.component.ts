import { Component }       from '@angular/core';

@Component({
  selector: 'udamy-home',
  template: `
    <h1>{{title}}</h1>
    <br>
    <udamy-header (menuSelectEvent)="onMenuSelect($event)"></udamy-header>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <recipes *ngIf="selectedItemId === 0"></recipes>
          <br><br>
          <shopping-list *ngIf="selectedItemId === 1"></shopping-list>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['../app.component.css']
})
export class UdamyHomeComponent {
  title = 'Udamy Home';
  selectedItemId: number = 0;

  onMenuSelect(id:number) {
    this.selectedItemId = id;
  }
}
