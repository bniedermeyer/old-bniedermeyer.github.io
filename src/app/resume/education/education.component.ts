import { Component, Input, OnInit } from '@angular/core';

import { Education } from '../../shared/education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  @Input() education: Education[];

  constructor() { }

  ngOnInit() {
  }

}
