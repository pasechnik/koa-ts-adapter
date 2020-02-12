import { AddMessage } from './AddMessage';
import { validate } from 'class-validator';

describe('request/AddMessage', () => {
    let addMessage: AddMessage;
    const validatorOptions = {};

    beforeAll(() => {
        addMessage = new AddMessage();
    });

    it(`has the expected class properties'`, async () => {
        addMessage.name = 'a game name here';
        expect(addMessage.name).toBeDefined();
    });

    describe(`'name' validation`, () => {
        it('is valid', async () => {
            for (let i = 1; i <= 20; ++i) {
                addMessage.name = 'x'.repeat(i);
                expect(await validate(addMessage, validatorOptions)).toHaveLength(0);
            }
        });

        it('must be a string', async () => {
            // @ts-ignore
            addMessage.name = 123;
            expect(await validate(addMessage, validatorOptions)).toHaveLength(1);
        });

        it('must have length of 1 character or greater', async () => {
            addMessage.name = '';
            expect(await validate(addMessage, validatorOptions)).toHaveLength(1);
        });

        it('must have a length of 20 characters or fewer', async () => {
            addMessage.name = 'y'.repeat(21);
            expect(await validate(addMessage, validatorOptions)).toHaveLength(1);
        });
    });
});
