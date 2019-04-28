import { TreeDto } from 'src/app/core/types/tree/treeDto';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit, OnChanges {
  @Input() tree: TreeDto;
  title: string;
  treeToEdit: TreeDto;

  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      if (propName === 'tree') {
        this.parseTree();
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }

  parseTree() {
    if (this.tree) {
      console.log(this.tree);
      this.treeToEdit = this.tree;
      this.title = this.tree.movieTitle;
    }
  }

  onTitle(event: any) {
    const $title = $(event.target);
    // if (this.onShiftEnter(event)) {
    //   const desc = $($title.parents('.node-container')[0]).children('.node-description');
    //   if (!desc.is(':visible')) {
    //     desc.show();
    //   }
    //   event.preventDefault();
    //   desc.focus();
    //   this.node.subtitle = event.target.value;
    // }
  }

  onShiftEnter(event: any) {
    return event.shiftKey && event.keyCode === 13 ? true : false;
  }

}
