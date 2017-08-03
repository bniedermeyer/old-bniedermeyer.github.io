import { Component, Input, OnInit } from '@angular/core';
import { Award } from '../../shared/award';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss']
})
export class AwardsComponent implements OnInit {
  @Input() awards: Award[];

  constructor() { }

  ngOnInit() {
  }

}
