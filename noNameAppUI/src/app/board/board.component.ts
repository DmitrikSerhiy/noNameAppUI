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
  scriptToEdit: TreeDto;

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
      this.scriptToEdit = this.tree;
      this.title = this.tree.movieTitle;
    }

  }

}
