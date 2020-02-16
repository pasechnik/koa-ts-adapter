// noinspection DuplicatedCode
import { app } from '../app';
import { Server } from 'http';
import * as request from 'supertest';
import DoneCallback = jest.DoneCallback;

let httpServer: Server;

beforeAll((doneCallback: DoneCallback) => {
    httpServer = app.listen();
    doneCallback();
});

afterAll((doneCallback: DoneCallback) => {
    httpServer.close();
    doneCallback();
});

// close the app after each test
afterEach((doneCallback: DoneCallback) => {
    doneCallback();
});

describe('routes/postRoutes', () => {
    const name = 'World of Warships';

    it(`should allow adding a project message - ${name}`, async () => {
        const response = await request(httpServer)
            .post('/project')
            .send({ name });

        expect(response.status).toEqual(201);
        expect(response.type).toEqual('application/json');
        expect(response.body).toEqual({
            project: ['New project'],
        });
    });
});
