import * as exp from "constants";
import * as Router from "koa-router" 

export const router = new Router()

router.get("/", (ctx,next) => {
    ctx.body = { msg : "GET : " + ctx.request.path};
});


import { router as v1 } from "./v1";
router.use("/v1", v1.routes())

import { router as v2 } from "./v2";
router.use("/v2", v2.routes())

