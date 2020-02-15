import { OrderedMap } from 'immutable';
import { SimulationDataRow } from './SimulationDataRow';
import { Project } from '../Project';
import { Task } from '../Task';
import { RowDataMap } from './SimulationDataItem';

export type SimulationDataSource = {
    rows: OrderedMap<number, RowDataMap>;
};

export type SimulationData = {
    project: Project;
    unitsCount: number;
    tasksCount: number;
    stepsCount: number;
    startTime: number;
    endTime: number;
    tasks: Task[];
    rows: SimulationDataRow[];
};
