import * as redis from 'redis';
import * as debug from 'debug';
import { promisify } from 'util';
import { Storage } from '../types/interfaces';
import { config } from '../config';

const error = debug('app:redisStorage:error');
const log = debug('app:redisStorage');

type PushFunction = (list: string, name: string) => Promise<number>;
type RemoveFunction = (key: string, count: number, value: string) => Promise<number>;
type RangeFunction = (key: string, start: number, stop: number) => Promise<string[]>;
type QuitFunction = () => Promise<'OK'>;

export const createRedisStorage = (): Storage => {
    const client = redis.createClient(config.redis);

    const rPush: PushFunction = promisify<number>(client.rpush).bind(client);
    const lRem: RemoveFunction = promisify(client.lrem).bind(client);
    const lRange: RangeFunction = promisify(client.lrange).bind(client);
    const quit: QuitFunction = promisify(client.quit).bind(client);

    return {
        get: async (list: string): Promise<string[]> => {
            try {
                const value: string[] = await lRange(list, 0, -1);
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
};
