import { Step } from '../Step';
import { TaskId, Task } from '../Task';

export type RowDataMap = Map<TaskId, SimulationDataItem>;

export type SimulationDataItem = {
    step: Step;
    task: Task;
};
