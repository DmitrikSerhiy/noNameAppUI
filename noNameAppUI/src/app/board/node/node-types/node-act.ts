import { NodeBase } from './node-base';
import { NodeEpisode } from './node-episode';
import { NodeIcon } from './node-icon';

export class NodeAct implements NodeBase {
    icon: NodeIcon;
    title: string;
    subtitle: string;
    description: string;
    order: number;
    episodes: NodeEpisode[];

    constructor(
        order: number,
        subtitle: string = '',
        description: string = '') {
            this.icon = NodeIcon.circle;
            this.order = order;
            this.title = 'ACT ' + this.order;
            this.subtitle = subtitle ? subtitle : '';
            this.description = description ? description : '';
    }
}
