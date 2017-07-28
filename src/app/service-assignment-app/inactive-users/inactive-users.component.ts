import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import {UsersService} from '../users-assignment.service';
import {CounterService} from '../counter.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html'
})
export class InactiveUsersComponent implements OnInit{
  users: string[];
  count: number = 0;

    constructor(private usersService: UsersService, private counterService: CounterService) {}


    ngOnInit():void {
      this.users = this.usersService.inactiveUsers;
    }

  onSetToActive(id: number) {
      this.usersService.makeActive(id);
      this.count = ++this.counterService.activeActionCount;
    }
}
