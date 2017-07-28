import {ServersService} from './servers/servers.service';
import {RoutingAuthService} from './routing-auth.service';
import {RoutingAuthGuard} from './routing-auth-guard.service';
import {CanDeactivateGuard} from './servers/edit-server/can-deactivate-guard.service';
import {ServerResolver} from './servers/server-resolver';
export const ROUTING_START_APP_PROVIDERS = [
  ServersService,
  RoutingAuthService,
  RoutingAuthGuard,
  CanDeactivateGuard,
  ServerResolver
];
