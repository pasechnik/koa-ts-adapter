// noinspection DuplicatedCode
import { app } from '../app';
import { Server } from 'http';
import { verifyJsonResponse } from '../tests/response';
import DoneCallback = jest.DoneCallback;

let app: Server;

beforeAll((doneCallback: DoneCallback) => {
    app = app.listen();
    doneCallback();
});

afterAll((doneCallback: DoneCallback) => {
    app.close();
    doneCallback();
});

// close the app after each test
afterEach((doneCallback: DoneCallback) => {
    doneCallback();
});

describe('routes/healthCheck', () => {
    it('should pong', async () => {
        await verifyJsonResponse(app, '/ping', 'pong');
    });
});
