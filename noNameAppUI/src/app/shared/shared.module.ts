import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    SpinnerComponent,
  SpinnerComponent
],
  imports: [
    CommonModule
  ],
  exports: [
    SpinnerComponent,
    CommonModule
  ]
})
export class SharedModule { }
