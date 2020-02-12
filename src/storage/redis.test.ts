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
        const myTestList2 = 'my_test_list_2';

        it('should allow adding an entry to the list', async () => {
            const storage: Storage = createRedisStorage();
            expect(await storage.add(myTestList2, 'chris')).toEqual(true);

            expect(await storage.get(myTestList2)).toEqual(['chris']);

            await storage.remove(myTestList2, 'chris');
            await storage.quit();
        });
    });

    describe('remove', () => {
        it('should allow removing an entry from the list', async () => {
            const storage: Storage = createRedisStorage();
            const myTestList3 = 'my_test_list_3';

            await storage.add(myTestList3, 'chris');
            await storage.add(myTestList3, 'paul');

            expect(await storage.remove(myTestList3, 'paul')).toEqual(true);

            expect(await storage.get(myTestList3)).toEqual(['chris']);

            await storage.remove(myTestList3, 'chris');
            await storage.quit();
        });
    });
});
