import * as Router from 'koa-router';

export const router = new Router();

import { router as post } from './method/post';

router.use(post.routes());

