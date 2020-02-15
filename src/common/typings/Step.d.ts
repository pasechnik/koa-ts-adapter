import { StepData } from './Data';

export type StepId = number | string;
export type Step = {
    id: StepId;
    time: number;
    data: StepData;
};
