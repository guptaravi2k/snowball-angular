import { Component }       from '@angular/core';
import { HeroService }     from '../hero-app/hero.service';

@Component({
  selector: 'my-home',
  template: `
    <h1>{{title}}</h1>
    <nav class="navbar navbar-default">
    <ul class="nav navbar-nav">
        <li><a [routerLink]="['/heroesHome']" routerLinkActive="active">Heroes</a></li>
        <li><a [routerLink]="['/ngbookHome']" routerLinkActive="active">ngbook</a></li>
        <li><a [routerLink]="['/udamyHome']" routerLinkActive="active">Udamy</a></li>
        <li><a [routerLink]="['/cmpDatabindingHome']" routerLinkActive="active">Cmp Databinding</a></li>
        <li><a [routerLink]="['/gameHome']" routerLinkActive="active">Game</a></li>
      </ul>
    </nav>
  `,
  styleUrls: ['../app.component.css'],

  providers: [
    HeroService
  ]
})
export class HomeComponent {
  title = 'Click an app to proceed';
}
