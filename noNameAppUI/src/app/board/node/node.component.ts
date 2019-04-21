import { NodeAct } from './node-types/node-act';
import { NodeService } from './node.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NodeBase } from './node-types/node-base';
import $ from 'jquery';
import { nodeChildrenAsMap } from '@angular/router/src/utils/tree';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements OnInit {

  node: NodeBase;

  constructor(private nodeService: NodeService) { }

  ngOnInit() {
    this.node = new NodeAct(1, 1, [], 'some subtitle', 'veeery long description') as NodeAct;
    if (!this.node.description) {
      $('.node-description').hide();
    }
  }

  onSubtitle(event: any) {
    if (this.onShiftEnter(event)) {
      const desc = $($(event.target).parents('.node-container')[0]).children('.node-description');
      if (!desc.is(':visible')) {
        desc.show();
      }
      desc.focus();
      this.node.subtitle = event.target.value;
    }
  }

  onDescription(event: any) {
    const desc = $(event.target);
    if (this.onShiftEnter(event)) {
      desc.blur().parent('.node-container').find('.node-subtitle').focus();
      const text = event.target.value;
      if (!text) {
        desc.hide();
      }
      this.node.description = text;
    } else {
      this.resizeDescription(event.target);
    }

  }

  onShiftEnter(event: any) {
    return event.shiftKey && event.keyCode === 13 ? true : false;
  }

  resizeDescription(textarea: HTMLElement) {
    setTimeout(() => {
      const lines = textarea.scrollHeight / parseInt($(textarea).css('lineHeight'), 10);
      const maxHeith = 5 * parseInt($(textarea).css('lineHeight'), 10);
      if (textarea.scrollHeight <= maxHeith) {
        $(textarea).attr('overflow', 'auto');
        textarea.style.cssText = 'height:auto; padding:0';
        textarea.style.cssText = 'height:' + textarea.scrollHeight + 'px';
      }
    }, 0);
  }
}
