import {RouterModule, Routes} from '@angular/router';
import {HeroesComponent} from './hero-app/heroes.component';
import {DashboardComponent} from './hero-app/dashboard.component';
import {HeroDetailComponent} from './hero-app/hero-detail.component';
import {HeroHomeComponent} from './hero-app/hero-home.component';
import {NgbookHomeComponent} from './ngbook-app/ngbook-home.component';
import {UdamyHomeComponent} from './udamy-app/udamy-home.component';
import {CmpDatabindingHomeComponent} from './cmp-databinding/cmp-databinding-home.component';
import {GameHomeComponent} from './game/game-home.component';
import {ServicesAppHomeComponent} from './services-app/services-app-home.component';
import {ServicesAssignmentAppHomeComponent} from './service-assignment-app/services-assignment-app-home.component';
import {ROUTING_STTART_APP} from './routing-start/routing-start.route';
import {ErrorPageComponent} from './error-page/error-page.component';
import {UDAMY_APP} from './udamy-app/udamy-app.routes';

const routes: Routes = [

    { path: '', redirectTo: '/udamyHome', pathMatch: 'full' },
    { path: 'heroesHome', component: HeroHomeComponent },
    { path: 'detail/:id', component: HeroDetailComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'home', component: UdamyHomeComponent },
    { path: 'ngbookHome', component: NgbookHomeComponent },
    { path: 'cmpDatabindingHome', component: CmpDatabindingHomeComponent },
    { path: 'gameHome', component: GameHomeComponent },
    { path: 'servicesHome', component: ServicesAppHomeComponent },
    { path: 'servicesAssignmentHome', component: ServicesAssignmentAppHomeComponent },
    { path: '', children:[
      ...ROUTING_STTART_APP,
      ...UDAMY_APP
    ]},
    //{ path: 'page-not-found', component: PageNotFoundComponent },
    { path: 'page-not-found', component: ErrorPageComponent, data: {message: 'this is coming from static error message'}  },
    { path: '**', redirectTo: '/page-not-found', pathMatch: 'full' }


];

export const routing = RouterModule.forRoot(routes, {enableTracing: true, useHash: true});
