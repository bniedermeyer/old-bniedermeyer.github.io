import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Position } from '../shared/position';
import { Skill } from '../shared/skill';
import { Education } from '../shared/education';
import { Award } from '../shared/award';
import { Project } from '../shared/project';
import { ResumeService } from './resume.service';

@Component({
  selector:    'app-resume',
  templateUrl: './resume.component.html',
  styleUrls:   ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {
  // data for the different components of the resume
  positions: Position[];
  skills: Skill[];
  degrees: Education[];
  awards: Award[];
  projects: Project[];
  // event to trigger the opening of the menu bar
  @Output() openSideNav = new EventEmitter<any>();


  constructor(private resumeService: ResumeService) {
    this.positions = resumeService.getWorkExperience();
    this.skills = resumeService.getSkills();
    this.degrees = resumeService.getEducation();
    this.awards = resumeService.getAwards();
    this.projects = resumeService.getProjects();
  }

  ngOnInit() {
  }

  handleOpenSideNav() {
    this.openSideNav.emit(null);
  }

}
