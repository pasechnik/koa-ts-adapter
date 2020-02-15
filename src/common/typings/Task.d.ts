import { Step } from './Step';
import { Location } from './Location';

export enum TaskType {
    SIGNAL,
    LOCATION,
    ADDRESS,
    FUEL,
    DEFAULT,
    SIMPLE,
    ROUTE_SIMULATION,
    GENERIC,
}

export type RouteSimulationTaskData = {
    start: Location;
    end: Location;
    speed: number;
    interval: number;
    length: number;
};

// type of Task identifier
export type TaskId = number | string;
export type Task = {
    id: TaskId;
    name: string;
    description: string;
    type: TaskType;
    timeoutBefore: number;
    data: RouteSimulationTaskData;
    steps: Step[];
    stepsCount: number;
    totalTime: number;
};
