import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScriptsComponent } from './scripts/scripts.component';

@NgModule({
  declarations: [ScriptsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ScriptsComponent,
  ]
})
export class LeftSideBarModule { }
