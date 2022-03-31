import { Component, Input, OnInit, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {
  @Input() headertext = ""
  @Output() navclick = new EventEmitter();
  constructor() { }

  ngOnInit(): void {

  }

  navclicked()
  {
    this.navclick.emit()
  }

}
