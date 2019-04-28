import { ActDto } from './actDto';

export interface TreeDto {
    id: string;
    movieTitle: string;
    subtitle?: string;
    notes?: string;
    acts: ActDto[];
};
