import * as debug from 'debug';
import * as logger from 'koa-logger';
import { Server } from 'http';
import { config } from './config';
import { app } from './app';

const error = debug('app:error');
const log = debug('app:index');

const PORT = config.port;

app.use(
    logger({
        transporter: str => {
            log(str);
        },
    }),
);

export const httpServer: Server = app
    .listen(PORT, async () => {
        log(`Server listening on port: ${PORT}`);
    })
    .on('error', err => {
        error(err);
    });

export default httpServer;
