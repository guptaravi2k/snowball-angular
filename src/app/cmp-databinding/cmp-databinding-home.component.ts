import { Component }       from '@angular/core';

@Component({
  selector: 'cmp-databinding-home',
  template: `
    <h1>{{title}}</h1>
    <br>
    <div class="container">
      <app-cockpit (onElementAdd) = onServerAdded($event)></app-cockpit>
      <hr>
      <div class="row">
        <div class="col-xs-12">
          <app-server-element *ngFor="let serverElement of serverElements" [element] = serverElement></app-server-element>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['../app.component.css']
})
export class CmpDatabindingHomeComponent {
  title = 'CMP Databinding Home';
  serverElements = [];

  onServerAdded(element: {name: string, type: string, content: string}) {
    this.serverElements.push(element);
  }
}
