import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as cors from 'koa2-cors';
import * as json from 'koa-json';
import { router } from './routes';
// import * as debug from 'debug';

// const error = debug('app:server:error');
// const log = debug('app:server');

export const server = new Koa();

server.use(bodyParser());
server.use(
    cors({
        origin: '*',
    }),
);
server.use(json());

server.use(router.middleware());
// server.use(router.routes()).use(router.allowedMethods());
