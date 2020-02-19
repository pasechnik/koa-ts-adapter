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

describe('routes/postRoutes-real', () => {
    it(`should keep track of all games added to the list'`, async () => {
        const game1 = { name: 'Half Life 3' };
        const response1 = await request(httpServer)
            .post('/post')
            .send(game1);

        expect(response1.status).toEqual(201);
        expect(response1.type).toEqual('application/json');
        expect(response1.body).toEqual({
            games: [game1.name],
        });

        const game2 = { name: 'FSX 2020' };
        const response2 = await request(httpServer)
            .post('/post')
            .send(game2);

        expect(response2.status).toEqual(201);
        expect(response2.type).toEqual('application/json');
        expect(response2.body).toEqual({
            games: [game1.name, game2.name],
        });
    });
});
