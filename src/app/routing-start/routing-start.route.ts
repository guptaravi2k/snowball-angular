import {Routes} from '@angular/router';
import {RoutingStartAppComponent} from './routing-start-app.component';
import {UsersComponent} from './users/users.component';
import {RoutingStartHomeComponent} from './home/routing-start-home.component';
import {UserComponent} from './users/user/user.component';
import {EditServerComponent} from './servers/edit-server/edit-server.component';
import {ServersComponent} from './servers/servers.component';
import {ServerComponent} from './servers/server/server.component';
import {RoutingAuthGuard} from './routing-auth-guard.service';
import {CanDeactivateGuard} from './servers/edit-server/can-deactivate-guard.service';
import {ServerResolver} from './servers/server-resolver';


export const ROUTING_STTART_APP: Routes = [
  { path: 'routingStartApp', component: RoutingStartAppComponent, children: [
    {path: '', component: RoutingStartHomeComponent},
    {path: 'users', component: UsersComponent, children: [
      {path: ':id/:name', component: UserComponent}
    ]},
    {path: 'servers', canActivateChild: [RoutingAuthGuard], component: ServersComponent, children: [
      {path: ':id', component: ServerComponent, resolve: {server: ServerResolver}},
      {path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard]}
    ]}
  ]}
];
