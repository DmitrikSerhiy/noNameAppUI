import { EpisodeDto } from './episodeDto';

export interface ActDto {
    id: string;
    order: number;
    name: string;
    description?: string;
    subtitle?: string;
    episodes?: EpisodeDto[];
}
