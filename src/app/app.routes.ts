import { RouterModule, Routes }  from '@angular/router';
import { HeroesComponent } from './hero-app/heroes.component';
import {DashboardComponent} from "./hero-app/dashboard.component";
import {HeroDetailComponent} from "./hero-app/hero-detail.component";
import {HeroHomeComponent} from "./hero-app/hero-home.component";
import {NgbookHomeComponent} from "./ngbook-app/ngbook-home.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
    {
        path: 'heroesHome',
        component: HeroHomeComponent
    },
    {
        path: 'detail/:id',
        component: HeroDetailComponent
    },
    {
        path: 'heroes',
        component: HeroesComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'ngbookHome',
        component: NgbookHomeComponent
    }
];

export const routing = RouterModule.forRoot(routes, {enableTracing: true, useHash: true});
