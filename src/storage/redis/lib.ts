import * as redis from 'redis';

export type KeyArgFunction<R> = (key: string) => Promise<R>;
export type NoArgFunction<R> = () => Promise<R>;
export type KeyDataArgsFunction<U, R> = (key: string, index: U) => Promise<R>;
export type KeyData2ArgsFunction<U, R> = (key: string, start: U, stop: U) => Promise<R>;
export type KeyIndexDataArgsFunction<U, R> = (key: string, index: number, value: U) => Promise<R>;
export type voidCallback<T> = (err: Error | null, reply: T) => void;
export type KeyArgCbFunction<T, R> = (key: string, cb?: voidCallback<T>) => R;
export type KeyNoArgCbFunction<T, R> = (cb?: voidCallback<T>) => R;

export type KeyDataArgsCbFunction<T, U, R> = (key: string, index: U, cb?: voidCallback<T>) => R;
export type KeyData2ArgsCbFunction<T, U, R> = (key: string, start: U, stop: U, cb?: voidCallback<T>) => R;
export type KeyIndexDataArgsCbFunction<T, U, R> = (key: string, index: number, value: U, cb?: voidCallback<T>) => R;
export type clientFunctions<T> = {
    length: KeyArgFunction<number>;
    clear: KeyArgFunction<number>;
    key: KeyDataArgsFunction<number, string | null>;
    get: KeyArgFunction<string | null>;
    list: KeyData2ArgsFunction<number, string[]>;
    add: KeyDataArgsFunction<string, number>;
    del: KeyIndexDataArgsFunction<string, number>;
    quit: NoArgFunction<'OK'>;
};

export const bindNonKeyRedisFunction = <R>(
    client: redis.RedisClient,
    func: KeyNoArgCbFunction<R, void>,
): NoArgFunction<R> => (): Promise<R> =>
    new Promise<R>((resolve, reject): void => {
        func.call(client, (err: Error | null, reply: R): void => {
            if (err != null) {
                reject(err);
                return;
            }
            resolve(reply);
        });
    });

export const bindRedisFunction = <R>(client: redis.RedisClient, func: KeyArgCbFunction<R, void>): KeyArgFunction<R> => (
    key: string,
): Promise<R> =>
    new Promise<R>((resolve, reject): void => {
        func.call(client, key, (err: Error | null, reply: R): void => {
            if (err != null) {
                reject(err);
                return;
            }
            resolve(reply);
        });
    });

export const bindRedisFunction2 = <U, R>(
    client: redis.RedisClient,
    func: KeyDataArgsCbFunction<R, U, boolean>,
): KeyDataArgsFunction<U, R> => (key: string, index: U): Promise<R> =>
    new Promise<R>((resolve, reject): void => {
        func.call(client, key, index, (err: Error | null, reply: R): void => {
            if (err != null) {
                reject(err);
                return;
            }
            resolve(reply);
        });
    });

export const bindRedisFunction3 = <U, R>(
    client: redis.RedisClient,
    func: KeyData2ArgsCbFunction<R, U, void>,
): KeyData2ArgsFunction<U, R> => (key: string, start: U, stop: U): Promise<R> =>
    new Promise<R>((resolve, reject): void => {
        func.call(client, key, start, stop, (err: Error | null, reply: R): void => {
            if (err != null) {
                reject(err);
                return;
            }
            resolve(reply);
        });
    });

export const bindRedisFunction4 = <U, R>(
    client: redis.RedisClient,
    func: KeyIndexDataArgsCbFunction<R, U, void>,
): KeyIndexDataArgsFunction<U, R> => (key: string, index: number, value: U): Promise<R> =>
    new Promise<R>((resolve, reject): void => {
        func.call(client, key, index, value, (err: Error | null, reply: R): void => {
            if (err != null) {
                reject(err);
                return;
            }
            resolve(reply);
        });
    });

export const bindRedisFunctions = <T extends string>(client: redis.RedisClient): clientFunctions<T> => ({
    length: bindRedisFunction<number>(client, client.llen),
    clear: bindRedisFunction<number>(client, client.del),
    get: bindRedisFunction<string>(client, client.get),
    key: bindRedisFunction2<number, string | null>(client, client.lindex),
    list: bindRedisFunction3<number, string[]>(client, client.lrange),
    add: bindRedisFunction2<string, number>(client, client.lpush),
    del: bindRedisFunction4<string, number>(client, client.lrem),
    quit: bindNonKeyRedisFunction<'OK'>(client, client.quit),
});
