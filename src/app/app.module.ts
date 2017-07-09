import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {routing} from "./app.routes";
import {HomeComponent} from "./home/home.component";
import {FormsModule} from "@angular/forms";
import {APP_DECLERATIONS} from "./app.declerations";
import {CockpitComponent} from "./cmp-databinding/cockpit/cockpit.component";
import {ServerElementComponent} from "./cmp-databinding/server-element/server-element.component";

@NgModule({
  declarations: [
    APP_DECLERATIONS,
    AppComponent,
    HomeComponent,
    CockpitComponent,
    ServerElementComponent

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
