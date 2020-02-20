import * as redis from 'redis';
import { Storage } from '../types/interfaces';
import { config } from '../config';
import { bindRedisFunctions, clientFunctions } from './redis/lib';

// import * as debug from 'debug';
// const error = debug('app:redisStorage:error');
// const log = debug('app:redisStorage');

// export const createRedisStorage = (): Storage => {
export type storageFabric<T extends string> = (name: string) => Storage<T>;

export function createStorage<T extends string>(name: string): Storage<T> {
    const client: redis.RedisClient = redis.createClient(config.redis);

    const { length, clear, key, get, list, add, del, quit }: clientFunctions<string> = bindRedisFunctions<string>(
        client,
    );

    return {
        length(): Promise<number> {
            return length(name);
        },
        clear(): Promise<number> {
            return clear(name);
        },
        key(index: number): Promise<string | null> {
            return key(name, index);
        },
        list(): Promise<string[]> {
            return list(name, 0, -1);
        },
        get(): Promise<string | null> {
            return get(name);
        },
        async set(value: T): Promise<boolean> {
            const result = await add(name, value);
            return result > 0;
        },
        async add(value: T): Promise<boolean> {
            const result = await add(name, value);
            return result > 0;
        },
        async del(value: T): Promise<boolean> {
            const result = await del(name, 0, value);
            return result > 0;
        },
        async remove(value: T): Promise<boolean> {
            const result = await del(name, 0, value);
            return result > 0;
        },
        quit(): Promise<'OK'> {
            return quit();
        },
    };
}
