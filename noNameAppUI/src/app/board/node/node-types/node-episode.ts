import { NodeBase } from './node-base';
import { NodeIcon } from './node-icon';

export class NodeEpisode implements NodeBase {
    icon: NodeIcon;
    title: string;
    subtitle: string;
    description: string;
    order: number;
    secuance: number;
    infoField: string;
    actionField: string;
    TransitionField: string;

    constructor() {

    }
};