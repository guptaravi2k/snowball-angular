import {Component} from '@angular/core';
import {LoggingService} from '../logging.service';
import {AccountService} from '../account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {

 constructor(private loggingService: LoggingService,
                private accountService: AccountService) {
   this.accountService.statusChangeEmitter.subscribe(
     blah => alert(blah)
   );
 }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount({name: accountName, status: accountStatus});
    this.loggingService.logStatus('A server status changed, new status: ' + accountStatus);
  }
}
