// import * as debug from 'debug';
import { Storage } from '../types/interfaces';

// const error = debug('app:mapStorage:error');
// const log = debug('app:mapStorage');
//
// const map = new Map();

export function createStorage<T>(): Storage<T> {
    return {
        add(): Promise<number> {
            return Promise.resolve(0);
        },
        clear(): Promise<number> {
            return Promise.resolve(0);
        },
        del(): Promise<number> {
            return Promise.resolve(0);
        },
        get(): Promise<string | null> {
            return Promise.resolve('');
        },
        key(): Promise<string | null> {
            return Promise.resolve('');
        },
        length(): Promise<number> {
            return Promise.resolve(0);
        },
        list(): Promise<string[]> {
            return Promise.resolve(['']);
        },
        quit(): Promise<'OK'> {
            return Promise.resolve('OK');
        },
        remove(): Promise<number> {
            return Promise.resolve(0);
        },
        set(): Promise<number> {
            return Promise.resolve(0);
        },
    };
}
