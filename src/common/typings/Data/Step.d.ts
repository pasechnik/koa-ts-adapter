export type SignalData = {
    signal: string;
};

export type LocationData = {
    lat: string;
    long: string;
};

export type AddressData = {
    address: string;
};

export type FuelData = {
    fuel: string;
};

export type DefaultData = {
    default: string;
};

export type RouteData = {
    latitude: number;
    longitude: number;
    distance: number;
};

export type StepData = RouteData | SignalData | LocationData | AddressData | FuelData | DefaultData;

export type DataCreator<T, V extends StepData> = (...args: T[]) => V;
