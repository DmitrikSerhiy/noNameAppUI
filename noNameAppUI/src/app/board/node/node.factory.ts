import { Injectable } from '@angular/core';
import { NodeBase } from './node-types/node-base';
import { NodeAct } from './node-types/node-act';

@Injectable({
  providedIn: 'root'
})
export class NodeFactory {

  constructor() { }

  createNode(type: string, config: NodeBase): NodeBase {
    switch (type) {
      case 'act': {
        return new NodeAct(
          config.order,
          config.subtitle,
          config.description);
      }
      default:
        break;
    }
  }


}
