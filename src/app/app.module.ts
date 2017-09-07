import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ResumeModule } from './resume/resume.module';
import { AppMaterialComponentsModule } from './app-material-components.module';
import { OverlayComponent } from './shared/overlay/overlay.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OverlayComponent
  ],
  imports:      [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    AppMaterialComponentsModule,
    ResumeModule
  ],
  providers:    [],
  bootstrap:    [AppComponent],
})
export class AppModule {
}
