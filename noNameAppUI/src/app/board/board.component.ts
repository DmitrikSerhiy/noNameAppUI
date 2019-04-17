import { Component, OnInit, ViewContainerRef  } from '@angular/core';
import { NodeFactoryService } from './node-factory.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  constructor(
    private nodeFactory: NodeFactoryService,
    private viewContainer: ViewContainerRef) { }

  ngOnInit() {
  }

  createNode() {
    this.nodeFactory.createNode(this.viewContainer);
  }

}
