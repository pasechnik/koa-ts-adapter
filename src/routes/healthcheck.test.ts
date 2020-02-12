// noinspection DuplicatedCode
import { server } from '../server';
import { Server } from 'http';
import { verifyJsonResponse } from '../tests/response';
import DoneCallback = jest.DoneCallback;

let app: Server;

beforeAll((doneCallback: DoneCallback) => {
    app = server.listen();
    doneCallback();
});

afterAll((doneCallback: DoneCallback) => {
    app.close();
    doneCallback();
});

// close the server after each test
afterEach((doneCallback: DoneCallback) => {
    doneCallback();
});

describe('routes/healthCheck', () => {
    it('should pong', async () => {
        await verifyJsonResponse(app, '/ping', 'pong');
    });
});
