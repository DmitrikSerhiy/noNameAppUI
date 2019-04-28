import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { NodeComponent } from './node/node.component';
import { TextareaAutosizeModule } from 'ngx-textarea-autosize';

@NgModule({
  declarations: [BoardComponent, NodeComponent],
  imports: [
    CommonModule,
    TextareaAutosizeModule
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
