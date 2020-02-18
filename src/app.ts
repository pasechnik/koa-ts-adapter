import * as IO from 'socket.io';
import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as cors from 'koa2-cors';
import * as debug from 'debug';
import * as http from 'http';
import * as json from 'koa-json';
import * as logger from 'koa-logger';
import { router } from './routes';

// Debug logging stuff
// const error = debug('app:app:error');
const log = debug('app:app');

export const app: Koa<{}, { io: IO.Server }> = new Koa();

export const server: http.Server = http.createServer(app.callback());
export const io: IO.Server = IO(server);

app.context.io = io;
app.use(bodyParser());
app.use(
    cors({
        origin: '*',
    }),
);
app.use(json());
app.use(
    logger({
        transporter: str => {
            log(str);
        },
    }),
);

// app.use(async (ctx, next) => {
//     ctx.io = io;
//     await next();
// });

app.use(router.middleware());

io.on('connection', (socket: IO.Socket) => {
    socket.join('animals');
    log(`connection client is `);
    io.emit('events', 'Welcome!');
    // socket.
    socket.on('event', data => {
        io.to('animals').emit('animal', `COOL: ${data}!`);
        log(`data sent is ${data}`);
    });
    socket.on('subscribe', () => {
        socket.join('animals');
        io.to('animals').emit('animal', 'COOL!');
        log(`subscribed`);
    });
    socket.on('unsubscribe', () => {
        socket.leave('animals');
        socket.emit('animal', 'COOL!');
        log(`unsubscribed`);
    });

    socket.on('disconnect', () => {
        socket.leaveAll();
        log('disconnect');
    });
});
