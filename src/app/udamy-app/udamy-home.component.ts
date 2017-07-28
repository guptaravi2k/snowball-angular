import { Component }       from '@angular/core';

@Component({
  selector: 'udamy-home',
  template: `
    <h1>{{title}}</h1>
    <br>
    <udamy-header></udamy-header>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['../app.component.css']
})
export class UdamyHomeComponent {
  title = 'Udamy Home';

}
