import * as Router from 'koa-router';
import { Context, Next } from 'koa';

export const rootRoutes: Router = new Router();

rootRoutes.get(
  '/',
  async (ctx: Context, next: Next): Promise<any> => {
    try {
      ctx.body = {
        ...ctx.body,
        status: 'success',
        data: 'root',
      };

      await next();
    } catch (err) {
      console.error(err);
    }
  },
);
