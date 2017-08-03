import { Component, Input, OnInit } from '@angular/core';

import { Project } from '../../shared/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  @Input() projects: Project[];

  constructor() { }

  ngOnInit() {
  }

}
