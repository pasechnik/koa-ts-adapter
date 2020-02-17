import * as debug from 'debug';
import { Storage } from '../types/interfaces';

const error = debug('app:mapStorage:error');
const log = debug('app:mapStorage');

const map = new Map();
const map = new Map();

export function createStorage<T>(): Storage {
    return {
        get: async (list: string): Promise<T[]> => {
            try {
                const value: T[] = await lRange(list, 0, -1);
                log(`got items: `, value);
                return value;
            } catch (e) {
                error('Error ', e);
                return [];
            }
        },
        add: async (list: string, name: string): Promise<boolean> => {
            try {
                const value: number = await rPush(list, name);
                log(`items added: ${value}`);
                return value > 0;
            } catch (e) {
                error('Error ', e);
                return false;
            }
        },
        remove: async (list: string, name: string): Promise<boolean> => {
            try {
                const value: number = await lRem(list, 0, name);
                log(`items removed: ${value}`);
                return value > 0;
            } catch (e) {
                error('Error ', e);
                return false;
            }
        },
        quit: async (): Promise<boolean> => {
            try {
                const value: string = await quit();
                log(`exited: ${value}`);
                return true;
            } catch (e) {
                error('Error ', e);
                return false;
            }
        },
    };
}
