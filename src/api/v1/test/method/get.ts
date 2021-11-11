import * as koa from "koa";
import * as Router from "koa-router";

export const router = new Router();
router.get("/",get);

async function get(ctx: koa.Context): Promise<void> {

    ctx.status = 200;
    ctx.body = { msg : "hello"}

}