import * as Router from 'koa-router';

import { healthCheckRoutes } from './healthcheck';
import { rootRoutes } from './rootRoutes';

export const router: Router = new Router();

router.use('/ping/(.*)', healthCheckRoutes.middleware());
router.use('/ping', healthCheckRoutes.middleware());
router.use('/', rootRoutes.middleware());
