import { Unit } from './Unit';

export type ProjectId = number | string;
export type Project = {
    id: ProjectId;
    name: string;
    units: Unit[];
};
