import * as request from 'supertest';
import { Server } from 'http';

export async function verifyJsonResponse(server: Server, url: string, dataExpected: string): Promise<void> {
    const response = await request(server).get(url);
    expect(response.status).toEqual(200);
    expect(response.type).toEqual('application/json');
    expect(response.body.data).toEqual(dataExpected);
}
