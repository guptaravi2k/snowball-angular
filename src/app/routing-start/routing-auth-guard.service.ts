import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild} from '@angular/router';
import {Observable} from 'rxjs/Rx';
import {RoutingAuthService} from './routing-auth.service';


@Injectable()
export class RoutingAuthGuard implements CanActivate, CanActivateChild {


    constructor(private router: Router, private authService: RoutingAuthService) {
    }

  canActivateChild(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<boolean>|Promise<boolean>|boolean {
    return this.canActivate(route, state);
  }
    canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<boolean>|Promise<boolean>|boolean {
        //return true;
        return this.authService.isAuthenticated()
          .then((authenticated: boolean) => {
            if (authenticated) {
              return true;
            } else {
              this.router.navigate(['/routingStartApp'])
            }
          })
    }
}
