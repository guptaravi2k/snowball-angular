import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {routing} from './app.routes';
import {HeroHomeComponent} from "./hero-app/hero-home.component";
import {HeroDetailComponent} from "./hero-app/hero-detail.component";
import {HeroesComponent} from "./hero-app/heroes.component";
import {DashboardComponent} from "./hero-app/dashboard.component";
import {HomeComponent} from "./home/home.component";
import {NgbookHomeComponent} from "./ngbook-app/ngbook-home.component";
import {FormsModule} from "@angular/forms";
import {HeroSearchComponent} from "./hero-app/hero-search.component";
import {CustomCounterComponent} from "./ngbook-app/custom.counter.component";
import {CounterInputComponent} from "./ngbook-app/counter-input.component";
import {FormComponent} from "./ngbook-app/my-template-driven-form.component";

@NgModule({
  declarations: [
    AppComponent,
    HeroHomeComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    HomeComponent,
    NgbookHomeComponent,
    HeroSearchComponent,
    CustomCounterComponent,
    CounterInputComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
