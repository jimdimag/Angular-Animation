import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, useAnimation } from '@angular/animations';

import { fadeAnimation } from '../animations';

@Component({
  selector: 'app-fadeblock',
  templateUrl: './fadeblock.component.html',
  styleUrls: [ './fadeblock.component.scss' ],
  animations: [
    trigger('changeState', [
      transition('void => *', [
          useAnimation(fadeAnimation, {
              params: {
                  delay: '1000ms',
                  from: 1,
                  to: 0,
                  time: '1s'
              }
          })
      ])
  ])
  ]
})
export class FadeblockComponent implements OnInit {
  currentState;

  constructor() { }

  ngOnInit() {
    this.currentState = 'entered';
  }

}
