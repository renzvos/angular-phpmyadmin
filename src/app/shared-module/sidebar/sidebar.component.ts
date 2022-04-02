
import { Component,  OnInit } from '@angular/core';
import { server } from '../structures/server';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  server1 = new server("127.0.0.0")
  server2 = new server("192.168.1.1")
  servers = [this.server1, this.server2]
 

  constructor() {

  }
   

  ngOnInit(): void {
  }

}
