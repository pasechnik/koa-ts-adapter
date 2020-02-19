import { ClientOpts } from 'redis';

export interface Config {
    redis: ClientOpts;
    port: string;
}

export interface StorageOld<T> {
    get: () => Promise<T[]>;
    add: (name: T) => Promise<boolean>;
    remove: (name: T) => Promise<boolean>;
    quit: () => Promise<boolean>;
}

export interface Storage<T> {
    /**
     * Returns the number of key/value pairs currently present in the list associated with the object.
     */
    length(): Promise<number>;

    /**
     * Empties the list associated with the object of all key/value pairs, if there are any.
     */
    clear(): Promise<number>;

    /**
     * Returns the current value associated with the given key, or null if the given key does not exist in the list associated with the object.
     */
    get(): Promise<string | null>;

    list(): Promise<string[]>;

    /**
     * Returns the name of the nth key in the list, or null if n is greater than or equal to the number of key/value pairs in the object.
     */
    key(index: number): Promise<string | null>;

    /**
     * Removes the key/value pair with the given key from the list associated with the object, if a key/value pair with the given key exists.
     */
    remove(value: string): Promise<boolean>;

    del(value: string): Promise<boolean>;

    /**
     * Adds the value of the pair identified by key to value, creating a new key/value pair if none existed for key previously.
     *
     * Throws a "QuotaExceededError" DOMException exception if the new value couldn't be set. (Setting could fail if, e.g., the user has disabled storage for the site, or if the quota has been exceeded.)
     */
    add(value: T): Promise<boolean>;

    set(value: T): Promise<boolean>;

    quit(): Promise<'OK'>;
}
