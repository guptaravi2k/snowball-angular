import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {RoutingAuthService} from '../routing-auth.service';

@Component({
  selector: 'routing-start-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class RoutingStartHomeComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private authService: RoutingAuthService) { }

  ngOnInit() {
  }

  onLoadServers() {

    this.router.navigate(['servers', '1', 'edit'], {relativeTo: this.route, queryParams: {allowEdit: '1'}, fragment: 'loadingg'});
  }

  onLogin() {
    this.authService.login();
  }

  onLogout() {
    this.authService.logout();
  }

}
