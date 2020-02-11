import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from 'koa2-cors';
import logger from 'koa-logger';
import { config } from './config';

const app = new Koa();
const PORT = config.port;

import healthCheckRoutes from './routes/healthcheck';

app.use(bodyParser());
app.use(
  cors({
    origin: '*',
  }),
);
app.use(logger());

// router.get(`/`, async ctx => {
//   try {
//     ctx.body = {
//       status: 'success',
//     };
//   } catch (err) {
//     console.error(err);
//   }
// });

app.use(healthCheckRoutes.routes());

const server = app
  .listen(PORT, async () => {
    console.log(`Server listening on port: ${PORT}`);
  })
  .on('error', err => {
    console.error(err);
  });

export default server;
