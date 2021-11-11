import * as Router from "koa-router"

export const router = new Router();

router.get('/', (ctx) => {
    ctx.body = "here is v1"
})


import { router as user}  from "./user";
router.use('/user', user.routes());

import { router as test}  from "./test";
router.use('/test', test.routes());


