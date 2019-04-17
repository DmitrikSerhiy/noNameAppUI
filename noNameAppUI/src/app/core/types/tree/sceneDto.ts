import { BitDto } from './bitDto';

export interface SceneDto {
    id: string;
    info?: string;
    action?: string;
    transition?: string;
    charge: boolean;
    bits?: BitDto[];
};
