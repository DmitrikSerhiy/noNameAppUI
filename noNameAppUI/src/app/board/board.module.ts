import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { NodeComponent } from './node/node.component';
import { AutosizeModule } from 'ngx-autosize';

@NgModule({
  declarations: [BoardComponent, NodeComponent],
  imports: [
    CommonModule,
    AutosizeModule
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
