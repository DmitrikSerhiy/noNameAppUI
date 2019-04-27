import { NodeAct } from './node-types/node-act';
import { NodeService } from './node.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NodeBase } from './node-types/node-base';
import $ from 'jquery';

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
    let text = event.target.value;
    if (this.onShiftEnter(event)) {
       desc.blur().parent('.node-container').find('.node-subtitle').focus();
    } else {
      if (!this.shouldResizeDescription(event.target)) {
        let currentDesc = text;
        currentDesc = currentDesc.slice(0, -1);
        currentDesc = currentDesc.replace(/(^[ \t]*\n)/gm, '');
        text = currentDesc;
      }
    }

    this.node.description = text;
  }

  onDescriptionBlur(event: any) {
    event.target.value = event.target.value.replace(/(^[ \t]*\n)/gm, '');
    if (!event.target.value) {
      $(event.target).remove();
      // $(event.target).hide();
    }
  }

  onShiftEnter(event: any) {
    return event.shiftKey && event.keyCode === 13 ? true : false;
  }

  shouldResizeDescription(descriptionTextArea: HTMLElement) {
    const lines = Math.round(descriptionTextArea.scrollHeight 
      / parseInt($(descriptionTextArea).css('lineHeight'), 10));
    return lines > 5 ? false : true;
  }
}
