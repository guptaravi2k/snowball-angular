import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {routing} from "./app.routes";
//import {HomeComponent} from "./home/home.component";
import {FormsModule} from "@angular/forms";
import {APP_DECLERATIONS} from "./app.declerations";
import {CockpitComponent} from "./cmp-databinding/cockpit/cockpit.component";
import {ServerElementComponent} from "./cmp-databinding/server-element/server-element.component";
import {APP_PROVIDERS} from './app.providers';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    APP_DECLERATIONS,
    AppComponent,
    //HomeComponent,
    CockpitComponent,
    ServerElementComponent,
    PageNotFoundComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  providers: [APP_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
