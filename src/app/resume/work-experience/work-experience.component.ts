import { Component, Input, OnInit } from '@angular/core';

import { Position } from '../../shared/position';

@Component({
  selector:    'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls:   ['./work-experience.component.scss'],
})
export class WorkExperienceComponent implements OnInit {
  @Input() positions: Position[];

  constructor() {
  }

  ngOnInit() {
  }

}
