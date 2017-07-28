import {LoggingService} from './logging.service';
import {Injectable, EventEmitter} from '@angular/core';

@Injectable()
export class AccountService {

  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];


    constructor(private loggingService: LoggingService) {}

    statusChangeEmitter: EventEmitter<string> = new EventEmitter();

    addAccount(newAccount: {name: string, status: string}) {
      this.accounts.push(newAccount);
    }

    updateStatus(updateInfo: {id: number, newStatus: string}) {
      this.accounts[updateInfo.id].status = updateInfo.newStatus;
      this.loggingService.logStatus("status updated = " + updateInfo.newStatus);
    }

}
