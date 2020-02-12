// noinspection DuplicatedCode
import { server } from '../server';
import { Server } from 'http';
import * as request from 'supertest';
import * as storageRedis from '../storage/redis';
import DoneCallback = jest.DoneCallback;

let app: Server;
jest.mock('../storage/redis');

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

describe('routes/postRoutes', () => {
    const games = ['World of Warships', 'Battlefield'];

    games.forEach((name: string) => {
        it(`should allow adding a message to the list - ${name}`, async () => {
            const mockGet = jest.fn((list: string) => Promise.resolve([name]));
            // @ts-ignore
            storageRedis['createRedisStorage'] = jest.fn(() => {
                return {
                    get: mockGet,
                    add: (list: string) => Promise.resolve(false),
                    remove: (list: string) => Promise.resolve(false),
                    quit: (list: string) => Promise.resolve('OK'),
                };
            });

            const response = await request(app)
                .post('/post')
                .send({ name });

            expect(response.status).toEqual(201);
            expect(response.type).toEqual('application/json');
            expect(response.body).toEqual({
                games: [name],
            });

            expect(mockGet).not.toHaveBeenCalled();
        });
    });

    it('should return a validation failure if the game data is incorrect', async () => {
        const response = await request(app)
            .post('/post')
            .send({ game: '' });

        expect(response.status).toEqual(400);
        expect(response.type).toEqual('application/json');
        expect(response.body).toEqual({
            status: 'error',
            data: [
                {
                    target: {
                        name: '',
                    },
                    value: '',
                    property: 'name',
                    children: [],
                    constraints: {
                        length: 'name must be longer than or equal to 1 characters',
                    },
                },
            ],
        });
    });
});
