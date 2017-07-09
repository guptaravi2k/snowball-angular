import { RouterModule, Routes }  from '@angular/router';
import { HeroesComponent } from './hero-app/heroes.component';
import {DashboardComponent} from "./hero-app/dashboard.component";
import {HeroDetailComponent} from "./hero-app/hero-detail.component";
import {HeroHomeComponent} from "./hero-app/hero-home.component";
import {NgbookHomeComponent} from "./ngbook-app/ngbook-home.component";
import {HomeComponent} from "./home/home.component";
import {UdamyHomeComponent} from "./udamy-app/udamy-home.component";
import {CmpDatabindingHomeComponent} from "./cmp-databinding/cmp-databinding-home.component";
import {GameHomeComponent} from "./game/game-home.component";

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
    },
    {
        path: 'udamyHome',
        component: UdamyHomeComponent
    },
    {
        path: 'cmpDatabindingHome',
        component: CmpDatabindingHomeComponent
    },
    {
        path: 'gameHome',
        component: GameHomeComponent
    }
];

export const routing = RouterModule.forRoot(routes, {enableTracing: true, useHash: true});
