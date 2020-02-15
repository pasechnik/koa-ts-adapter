import { app } from '../app';
import { Server } from 'http';
import { verifyJsonResponse } from '../tests/response';
import DoneCallback = jest.DoneCallback;

let server: Server;

beforeAll((doneCallback: DoneCallback) => {
    server = app.listen();
    doneCallback();
});

afterAll((doneCallback: DoneCallback) => {
    server.close();
    doneCallback();
});

// close the app after each test
afterEach((doneCallback: DoneCallback) => {
    doneCallback();
});

describe('routes/healthCheck', () => {
    it('should pong', async () => {
        await verifyJsonResponse(server, '/ping', 'pong');
    });
});
