import * as Router from 'koa-router';
import { Context, Next } from 'koa';

export const healthCheckRoutes: Router = new Router();

healthCheckRoutes.get(
  `/`,
  async (ctx: Context, next: Next): Promise<any> => {
    try {
      ctx.body = {
        ...ctx.body,
        status: 'success',
        data: 'pong',
      };

      await next();
    } catch (err) {
      console.error(err);
    }
  },
);
