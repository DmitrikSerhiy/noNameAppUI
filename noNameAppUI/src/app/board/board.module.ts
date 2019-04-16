import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { NodeComponent } from './node/node.component';
import { NodeFactoryService } from './node-factory.service';

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
    NodeFactoryService
  ],
  entryComponents: [
    NodeComponent
  ]
})
export class BoardModule { }
