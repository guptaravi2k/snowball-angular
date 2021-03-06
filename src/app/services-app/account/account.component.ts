import {Component, Input} from '@angular/core';
import {LoggingService} from '../logging.service';
import {AccountService} from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private loggingService: LoggingService,
              private accountService: AccountService) {}

  onSetTo(status: string) {
    this.accountService.updateStatus({id: this.id, newStatus: status});
    this.loggingService.logStatus('A server status changed, new status: ' + status);
    this.accountService.statusChangeEmitter.emit(status);
  }
}
