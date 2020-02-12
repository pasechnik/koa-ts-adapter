import { config } from './config';
import { server } from './server';
import * as logger from 'koa-logger';
import * as debug from 'debug';

const error = debug('app:error');
const log = debug('app:index');

const PORT = config.port;

// server.use(logger());
server.use(
    logger({
        transporter: str => {
            log(str);
        },
    }),
);

export const app = server
    .listen(PORT, async () => {
        log(`Server listening on port: ${PORT}`);
    })
    .on('error', err => {
        error(err);
    });

export default app;
