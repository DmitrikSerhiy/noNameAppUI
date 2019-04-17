import { Injectable } from '@angular/core';
import { NodeBase } from './node-types/node-base';
import { NodeAct } from './node-types/node-act';
import { NodeConfig } from './node-types/node-config';
import { NodeEpisode } from './node-types/node-episode';

@Injectable({
  providedIn: 'root'
})
export class NodeService {

  constructor() { }

  buildNode(type: string, config: NodeConfig): NodeBase {
    switch (type) {
      case 'act': {
        return new NodeAct(
          config.order,
          config.secuance,
          config.nodes as NodeEpisode[],
          config.subtitle,
          config.description);
      }
      default:
        break;
    }
  }


}
