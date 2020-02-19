import * as Router from 'koa-router';

import { healthCheck } from './healthcheck';
import { root } from './root';
import { post } from './post';
import { projectRouter } from './projectRouter';

export const router: Router = new Router();

router.use('/ping/(.*)', healthCheck.middleware());
router.use('/ping', healthCheck.middleware());
router.use('/post', post.middleware());
router.use('/project', projectRouter.middleware());
router.use('/', root.middleware());
