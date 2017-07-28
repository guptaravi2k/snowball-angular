import {SERVICES_APP_PROVIDERS} from './services-app/services-app.providers';
import {SERVICES_ASSIGNMENT_APP_PROVIDERS} from './service-assignment-app/services-assignment-app.providers';
import {RECIPE_APP_PROVIDERS} from './udamy-app/udamy-app.providers';
import {ROUTING_START_APP_PROVIDERS} from './routing-start/routing-start-app.providers';
export const APP_PROVIDERS = [
  SERVICES_APP_PROVIDERS,
  SERVICES_ASSIGNMENT_APP_PROVIDERS,
  RECIPE_APP_PROVIDERS,
  ROUTING_START_APP_PROVIDERS
];
