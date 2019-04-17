import { NodeAct } from './node-types/node-act';
import { NodeService } from './node.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NodeBase } from './node-types/node-base';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements OnInit {

  node: NodeBase;
  @ViewChild('actDesc') descField: ElementRef;
  isDescNotEmpty: boolean;
  constructor(private nodeService: NodeService) { }

  ngOnInit() {
    this.node = new NodeAct(1, 1, [], 'some subtitle', 'this is loong description') as NodeAct;
    if (this.node.description) {
      this.isDescNotEmpty = true;
    }
  }

  onSubtitle(event: any) {
    this.node.subtitle = event.target.value;
    if (event.shiftKey && event.keyCode === 13) {
      this.isDescNotEmpty = true;
      this.descField.nativeElement.focus();
    }
  }

  onDescription(event: any) {
    this.node.description = event.target.value;
    if (!this.node.description) {
      this.isDescNotEmpty = false;
    }
  }
}
