import { ClientOpts } from 'redis';

export interface Config {
    redis: ClientOpts;
    port: string;
}

export interface Storage {
    get: (list: string) => Promise<string[]>;
    add: (list: string, name: string) => Promise<boolean>;
    remove: (list: string, name: string) => Promise<boolean>;
    quit: () => Promise<boolean>;
}
