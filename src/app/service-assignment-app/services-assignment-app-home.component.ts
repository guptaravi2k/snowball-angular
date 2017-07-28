import {Component, OnInit}       from '@angular/core';
import {UsersService} from './users-assignment.service';
import {CounterService} from './counter.service';

@Component({
  selector: 'services-assignment-home',
  template: `
    <div class="container">
  <div class="row">
    <div class="col-xs-12 col-md-8 col-md-offset-2">
      <app-active-users ></app-active-users>
      <app-inactive-users ></app-inactive-users>
    </div>
    <!--
      Optimize this app by adding a UsersService which manages the active and inactive users.

      Also add a CounterService which counts the number of active->inactive and inactive->active actions.
    -->
  </div>
</div>
  `,
  styles: [`
    .container {
      margin-top: 30px;
    }
`]
})

export class ServicesAssignmentAppHomeComponent {
/*
  constructor(private usersService: UsersService) {}
  activeUsers = [];
  inactiveUsers = [];



  ngOnInit():void {
    this.activeUsers = this.usersService.activeUsers;
    this.inactiveUsers = this.usersService.inactiveUsers;
  }*/
}
