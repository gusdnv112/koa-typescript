import * as Router from 'koa-router';

export const router = new Router();

import { router as get } from './method/get';

router.use(get.routes());

