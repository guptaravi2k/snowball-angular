import {Component, OnInit}       from '@angular/core';
import {AccountService} from './account.service';

@Component({
  selector: 'services-home',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-8 col-md-offset-2">
          <app-new-account></app-new-account>
          <hr>
          <app-account
            *ngFor="let acc of accounts; let i = index"
            [account]="acc"
            [id]="i"></app-account>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .container {
      margin-top: 30px;
    }
`]
})

export class ServicesAppHomeComponent implements OnInit {

  accounts: {name: string, status: string}[] = [];
  constructor(private accountService: AccountService) {}

    ngOnInit():void {
      this.accounts = this.accountService.accounts;  // reference assignment
    }
}
