import { createRedisStorage } from './redis';
import { Storage } from '../types/interfaces';

describe('storage/redis', () => {
    describe('get', () => {
        it('should initially return an empty list', async () => {
            const storage = createRedisStorage();
            expect(await storage.get('my_test_list_1')).toEqual([]);
            await storage.quit();
        });
    });

    describe('add', () => {
        const list_name = 'my_test_list_2';

        it('should allow adding an entry to the list', async () => {
            const storage: Storage = createRedisStorage();
            expect(await storage.add(list_name, 'chris')).toEqual(true);

            expect(await storage.get(list_name)).toEqual(['chris']);

            await storage.remove(list_name, 'chris');
            await storage.quit();
        });
    });

    describe('remove', () => {
        it('should allow removing an entry from the list', async () => {
            const storage: Storage = createRedisStorage();
            const list_name = 'my_test_list_3';

            await storage.add(list_name, 'chris');
            await storage.add(list_name, 'paul');

            expect(await storage.remove(list_name, 'paul')).toEqual(true);

            expect(await storage.get(list_name)).toEqual(['chris']);

            await storage.remove(list_name, 'chris');
            await storage.quit();
        });
    });
});
