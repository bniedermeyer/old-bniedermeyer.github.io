import { Component, OnInit } from '@angular/core';
import { Position } from '../shared/position';
import { Skill } from '../shared/skill';
import { Education } from '../shared/education';
import { Award } from '../shared/award';
import { Project } from '../shared/project';

@Component({
  selector:    'app-resume',
  templateUrl: './resume.component.html',
  styleUrls:   ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {
  positions: Position[] = [{
    current: true,
    title: 'Developer',
    company: 'Expeditors',
    dateStart: new Date(2012, 8, 12),
    dateEnd: new Date(),
    description: 'Collaborate with systems analyst to develop, test, and deploy EDI translations to ensure successful transmission of messages within the company, between clients, and between government entities. Perform system research as needed. Serve on after-hours on-call rotation. Mentor developers new to the company. Use innovation time to enhance existing Java applications as needed.',
    highlights: ['thing a', 'thing b', 'thing c']
  }];

  skills: Skill[] = [
    {
    name: 'Java',
    highlights: ['Eclipse', 'Spring', 'Maven']
    },
    {
      name: 'Version Control',
      highlights: ['SVN', 'Git']
    }
  ];

  degrees: Education[] = [
    {
      name: 'Washington State University',
      degree: 'Business Administration - Management Information Systems, Bachelor of Arts',
      startDate: new Date(2007,1),
      endDate: new Date(2012,1),
      minors: ['Music', 'German']
    }
  ];

  awards: Award[] = [
    {
      name: 'Notice of Appreciation - Canadian Border Services Agency Project',
      awardingOrg: 'Expeditors International of Washington, Inc',
      date: new Date(2014, 9),
      description: 'Awarded for work as lead developer on a project to interface with Canadian Customs new Border Services system. Despite extreme complexity and rapidly changing timelines dictated by both internal customers and the Canadian Government, we became one of the first companies able to exchange messages successfully with the new system.'
    }
  ];

  projects: Project[] = [
    {
      name: 'Timerize',
      inProgress: false,
      url: 'http://www.brenden.fyi/timerize',
      description: 'A time tracking app to track how long you spend on different activities or projects during the day. Built Timer class to track passage of time and perform basic timer functions.',
      technologiesUsed: ['React', 'Sass', 'ES6']
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
