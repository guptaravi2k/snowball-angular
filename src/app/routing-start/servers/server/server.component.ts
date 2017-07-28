import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import {ActivatedRoute, Router, Data} from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    /*let id: number = 0;
    this.route.params.subscribe(
      param => {
        id = +param['id'];
        this.server = this.serversService.getServer(id);
      }
    );*/

    this.route.data.subscribe(
      (data: Data) => {
        this.server = data['server'];
      })
  }


  onServerEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route, preserveQueryParams: true})
  }

}
