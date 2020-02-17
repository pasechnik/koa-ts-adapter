import * as Router from 'koa-router';
import { Context, Next } from 'koa';
import { AddMessage } from '../request/AddMessage';
import { validate } from 'class-validator';
import * as debug from 'debug';
import { createRedisStorage } from '../storage/redis';

// const error = debug('app:post:error');
const log = debug('app:post');

export const post: Router = new Router();

post.post(
    `/`,
    async (ctx: Context, next: Next): Promise<void> => {
        const validatorOptions = {};

        const message = new AddMessage();
        log('Request: ', ctx.request.body);
        message.name = ctx.request.body.name || '';

        const errors = await validate(message, validatorOptions);

        if (errors.length > 0) {
            ctx.status = 400;
            ctx.body = {
                status: 'error',
                data: errors,
            };

            return;
        }

        const list = 'post_list';
        const storage = createRedisStorage();
        await storage.add(list, message.name);
        const games = await storage.get(list);
        await storage.quit();

        // ALL ABOVE THIS IS NEW
        ctx.status = 201;
        ctx.body = {
            ...ctx.body,
            games,
        };

        await next();

        return;
    },
);
