import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdToolbarModule, MdCardModule, MdListModule, MdSidenavModule, MdIconModule, MdButtonModule,
} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MdToolbarModule,
    MdCardModule,
    MdListModule,
    MdSidenavModule,
    MdIconModule,
    MdButtonModule
  ],
  exports: [MdToolbarModule, MdCardModule, MdListModule, MdSidenavModule, MdIconModule, MdButtonModule]
})
export class AppMaterialComponentsModule { }
