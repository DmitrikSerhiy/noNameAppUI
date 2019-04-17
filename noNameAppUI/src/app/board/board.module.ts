import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { NodeComponent } from './node/node.component';

@NgModule({
  declarations: [BoardComponent, NodeComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    BoardComponent
  ],
  providers: [
  ],
  entryComponents: [
    NodeComponent
  ]
})
export class BoardModule { }
