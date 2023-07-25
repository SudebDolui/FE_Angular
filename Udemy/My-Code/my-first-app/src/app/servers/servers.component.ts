import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-servers',
  selector: '[app-servers]',
  templateUrl: './servers.component.html',
  // template: '<app-server></app-server>',
  // template: `<app-server></app-server>
  //   <app-server></app-server> `,
  styleUrls: ['./servers.component.css'],
  // styles: [`p {
  //   color: black;
  // }`],
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus = 'No server was created.';
  serverName = '';
  serverCreated = false;
  servers = ['Test Server', 'Tester Server One', 'Test Server Two'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus =
      'Server was created with name: ' + this.serverName;
  }

  // onUpdateServerName(event: any) {
  //   // console.log(event)
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }
}
