import { NodeBase } from './node-base';
import { NodeIcon } from './node-icon';

export interface NodeBase {
    icon: NodeIcon;
    title: string;
    subtitle: string;
    description: string;
    order: number;
    // secuance: number;
    // childrens: NodeBase[];
};