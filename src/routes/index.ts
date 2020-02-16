import * as Router from 'koa-router';

import { healthCheck } from './healthcheck';
import { root } from './root';
import { post } from './post';
import { project } from './project';

export const router: Router = new Router();

router.use('/ping/(.*)', healthCheck.middleware());
router.use('/ping', healthCheck.middleware());
router.use('/post', post.middleware());
router.use('/project', project.middleware());
router.use('/', root.middleware());
