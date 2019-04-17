import { EpisodeDto } from './episodeDto';

export interface ActDto {
    id: string;
    order: number;
    name: string;
    desc?: string;
    notes?: string;
    episodes?: EpisodeDto[];
};
