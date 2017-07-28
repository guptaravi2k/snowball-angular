import {Component, OnInit} from '@angular/core';
import {UsersService} from '../users-assignment.service';
import {CounterService} from '../counter.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html'
})
export class ActiveUsersComponent implements OnInit{
  users: string[];
  count: number = 0;

  constructor(private usersService: UsersService, private counterService: CounterService) {}

  ngOnInit():void {
    this.users = this.usersService.activeUsers;
  }

  onSetToInactive(id: number) {
    this.usersService.makeInactive(id);
    this.count = ++this.counterService.inactiveActionCount;
  }
}
