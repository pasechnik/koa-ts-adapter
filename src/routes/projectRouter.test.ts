// noinspection DuplicatedCode
import { server } from '../app';
import * as http from 'http';
import * as request from 'supertest';
import DoneCallback = jest.DoneCallback;

let httpServer: http.Server;

beforeAll((doneCallback: DoneCallback) => {
    httpServer = server.listen();
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
            .send({
                name,
                id: '18f8e770-0b86-11ea-aa50-db39822fe846',
                units: [],
            });

        expect(response.status).toEqual(201);
        expect(response.type).toEqual('application/json');
        expect(response.body).toEqual({
            project: {
                name,
                id: '18f8e770-0b86-11ea-aa50-db39822fe846',
                units: [],
            },
        });
    });
});
