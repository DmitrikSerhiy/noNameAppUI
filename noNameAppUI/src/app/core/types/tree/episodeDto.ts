import { Time } from '@angular/common';
import { SceneDto } from './sceneDto';

export interface EpisodeDto {
    id: string;
    info?: string;
    action?: string;
    transition?: string;
    timeSpot: Time;
    charge: boolean;
    plotId: string;
    scenes?: SceneDto[];
};
