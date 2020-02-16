import { SimulationDataItem } from './SimulationDataItem';

export type SimulationDataRow = {
    num: number;
    time: number;
    items: SimulationDataItem[];
};
