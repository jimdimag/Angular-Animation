import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, useAnimation } from '@angular/animations';

import { fadeAnimation } from '../animations';

@Component({
  selector: 'app-fadeblock',
  templateUrl: './fadeblock.component.html',
  styleUrls: [ './fadeblock.component.scss' ],
  animations: [
    trigger('changeState', [
      transition(':enter', [
          useAnimation(fadeAnimation, {
              params: {
                  delay: '3000ms',
                  from: 0,
                  to: 1,
                  time: '1s'
              }
          })
      ])
  ])
  ]
})
export class FadeblockComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
