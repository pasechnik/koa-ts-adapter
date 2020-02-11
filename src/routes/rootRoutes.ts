import * as Router from 'koa-router';
import { Context } from 'koa';

export const rootRoutes: Router = new Router();

rootRoutes.get('/', async (ctx: Context) => {
  try {
    ctx.body = {
      status: 'success',
      data: 'root',
    };
  } catch (err) {
    console.error(err);
  }
});
