import { Config } from './types/interfaces';

export const config: Config = {
    port: process.env.PORT || '7654',
    redis: {
        host: 'localhost',
        port: 6401,
    },
};
