import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('drawerEl') drawer: MatDrawer | undefined;
  title = 'angular-phpmyadmin';
  navigationstring = "Server()"
  mode = 'slide'

  ngAfterViewInit(): void {
      this.drawertoggle()
  }

  drawertoggle()
  {
    if(this.drawer != undefined) this.drawer.toggle();
  }

}
