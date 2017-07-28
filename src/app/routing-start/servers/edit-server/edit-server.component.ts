import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CanDeactivateComponent} from './can-deactivate-guard.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanDeactivateComponent {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit: boolean = false;
  hasChanged: boolean = false;

  constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.route.params.subscribe(
      param => {
        id = +param['id'];
      }
    );
    this.route.queryParams.subscribe(
      param => {
        this.allowEdit = +param['allowEdit'] === 1
      }
    );
    //this.route.fragment.subscribe();
    this.server = this.serversService.getServer(id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.hasChanged = true;
    this.router.navigate(['../'], {relativeTo: this.route})
  }


    canDeactivate(): Observable<boolean>|Promise<boolean>|boolean {
      if (!this.allowEdit) {
        return true;
      }
      if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.hasChanged) {
        return confirm('are you sure?');
      } else {
        return true;
      }
    }
}
