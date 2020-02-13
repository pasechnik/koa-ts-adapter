import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as cors from 'koa2-cors';
import * as json from 'koa-json';
import { router } from './routes';

// Debug logging stuff
// import * as debug from 'debug';
// const error = debug('app:app:error');
// const log = debug('app:app');

export const app: Koa = new Koa();

app.use(bodyParser());
app.use(
    cors({
        origin: '*',
    }),
);
app.use(json());

app.use(router.middleware());
// app.use(router.routes()).use(router.allowedMethods());
