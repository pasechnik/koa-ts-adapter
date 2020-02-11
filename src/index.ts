import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as cors from 'koa2-cors';
import * as logger from 'koa-logger';
import * as json from 'koa-json';
import { config } from './config';
import { router } from './routes';

const app = new Koa();

const PORT = config.port;

app.use(bodyParser());
app.use(
  cors({
    origin: '*',
  }),
);
app.use(json());
app.use(logger());

app.use(router.routes()).use(router.allowedMethods());

export const index = app
  .listen(PORT, async () => {
    console.log(`Server listening on port: ${PORT}`);
  })
  .on('error', err => {
    console.error(err);
  });

export default index;
