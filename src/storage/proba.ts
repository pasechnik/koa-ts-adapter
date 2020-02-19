import * as redis from 'redis';
import * as debug from 'debug';
import { config } from '../config';
import { bindRedisFunctions, clientFunctions } from './redis/lib';

const error = debug('app:redisStorage:error');
const log = debug('app:redisStorage');

const client: redis.RedisClient = redis.createClient(config.redis);

const { length, clear, key }: clientFunctions<string> = bindRedisFunctions<string>(client);

Promise.all([
    key('project_list', 0),
    key('post_list', 0),
    key('my_test_list_1', 0),
    key('my_test_list_2', 0),
    key('my_test_list_3', 0),
])
    .then(log)
    .catch(error);

Promise.all([
    length('project_list'),
    length('post_list'),
    length('my_test_list_1'),
    length('my_test_list_2'),
    length('my_test_list_3'),
])
    .then(log)
    .catch(error);

Promise.all([
    clear('project_list'),
    clear('post_list'),
    clear('my_test_list_1'),
    clear('my_test_list_2'),
    clear('my_test_list_3'),
])
    .then(log)
    .then(() => client.end(false))
    .catch(error);
