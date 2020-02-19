import { createStorage } from './redis';
import { Storage } from '../types/interfaces';

describe('storage/redis', () => {
    describe('list', () => {
        it('should initially return an empty list', async () => {
            const storage: Storage<string> = createStorage<string>('my_test_list_1');
            expect(await storage.list()).toEqual([]);
            await storage.quit();
        });
    });

    describe('add', () => {
        it('should allow adding an entry to the list', async () => {
            const storage: Storage<string> = createStorage<string>('my_test_list_2');
            expect(await storage.add('chris')).toEqual(true);

            expect(await storage.list()).toEqual(['chris']);

            await storage.remove('chris');
            await storage.quit();
        });
    });

    describe('remove', () => {
        it('should allow removing an entry from the list', async () => {
            const storage: Storage<string> = createStorage<string>('my_test_list_3');

            await storage.add('chris');
            await storage.add('paul');

            expect(await storage.remove('paul')).toEqual(true);

            expect(await storage.list()).toEqual(['chris']);

            await storage.remove('chris');
            await storage.quit();
        });
    });
});
