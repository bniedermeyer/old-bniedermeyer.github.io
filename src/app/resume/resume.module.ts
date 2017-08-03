import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume.component';
import { ContactComponent } from './contact/contact.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { AwardsComponent } from './awards/awards.component';
import { ProjectsComponent } from './projects/projects.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ResumeComponent, ContactComponent, WorkExperienceComponent, SkillsComponent, EducationComponent, AwardsComponent, ProjectsComponent]
})
export class ResumeModule { }
