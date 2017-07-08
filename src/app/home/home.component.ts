import { Component }       from '@angular/core';
import { HeroService }     from '../hero-app/hero.service';

@Component({
  selector: 'my-home',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['/heroesHome']" routerLinkActive="active">Heroes</a>
      <a [routerLink]="['/ngbookHome']" routerLinkActive="active">ngbook</a>
      <!--<a [routerLink]="['/home']" routerLinkActive="active">Home</a>-->
    </nav>
  `,
  styleUrls: ['../app.component.css'],

  providers: [
    HeroService
  ]
})
export class HomeComponent {
  title = 'Welcome to Application Home';
}
