import { ActDto } from './actDto';

export interface TreeDto {
    id: string;
    movieTitle: string;
    subTitle?: string;
    notes?: string;
    acts: ActDto[];
};
