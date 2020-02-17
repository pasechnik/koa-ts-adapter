import * as http from 'http';
import * as debug from 'debug';
import { config } from './config';
import { server } from './app';

const error = debug('app:error');
const log = debug('app:index');

const PORT = config.port;

export const httpServer: http.Server = server
    .listen(PORT, async () => {
        log(`Server is listening on port: ${PORT}`);
    })
    .on('error', (err: Error) => {
        error(err);
    });

export default httpServer;
