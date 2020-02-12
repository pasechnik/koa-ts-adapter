import * as Router from 'koa-router';
import { Context, Next } from 'koa';

export const root: Router = new Router();

root.get(
    '/',
    async (ctx: Context, next: Next): Promise<Context> => {
        ctx.body = {
            ...ctx.body,
            status: 'success',
            data: 'root',
        };

        await next();

        return ctx;
    },
);
