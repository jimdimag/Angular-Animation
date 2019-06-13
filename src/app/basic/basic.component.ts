import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {
  switchstate = 'original';

  setState(state) {
    this.switchstate = state;
    console.log(state);
  }
  constructor() { }

  ngOnInit() {
  }

}
