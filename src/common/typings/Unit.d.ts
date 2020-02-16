import { Task } from './Task';

// type of Unit identifier
export type UnitId = number | string;

// type of Unit
export type Unit = {
    id: UnitId;
    name: string;
    /* eslint-disable @typescript-eslint/no-explicit-any */
    data: any;
    tasks: Task[];
};
