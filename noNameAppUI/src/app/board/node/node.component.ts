import { NodeFactory } from './node.factory';
import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { NodeBase } from './node-types/node-base';
import $ from 'jquery';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements OnInit, AfterViewInit {


  @Input() inputNode: NodeBase;
  @Input() inputNodeType: string;
  node: NodeBase;
  nodeType: any;
  constructor(private nodeService: NodeFactory) { }

  ngOnInit() {
    this.node = this.inputNode;
    this.nodeType = this.inputNodeType;
    this.node = this.nodeService.createNode(this.nodeType, this.node);
  }

  ngAfterViewInit(): void {
    if (!this.node.description) {
      $('.node-description').hide();
    } else {
      $('.node-description').show();
    }
  }

  onSubtitle(event: any) {
    const $subTitle = $(event.target);
    if (this.onShiftEnter(event)) {
      const desc = $($subTitle.parents('.node-container')[0]).children('.node-description');
      if (!desc.is(':visible')) {
        desc.show();
      }
      event.preventDefault();
      desc.focus();
      this.node.subtitle = event.target.value;
    }
  }

  onDescription(event: any) {
    const $desc = $(event.target);
    let text = event.target.value;
    let $parentSubTitle = $desc.parent('.node-container').find('.node-subtitle');
    if (this.onShiftEnter(event)) {
      event.preventDefault();
      if (!text) {
        $desc.hide();
      } else {
        text = text.trim();
        $desc.val(text);
      }
      $desc.blur();
      $parentSubTitle.focus();
    }
    this.node.description = text;
  }

  onShiftEnter(event: any) {
    return event.shiftKey && event.keyCode === 13 ? true : false;
  }
}
