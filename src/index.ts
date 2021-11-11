import * as Koa from "koa";
import * as Router from "koa-router";

import * as logger from "koa-logger";
import * as json from "koa-json";


const app = new Koa();
const router = new Router()
router.get("/", async (ctx,next) => { 
    ctx.body = { msg : "hello first ts"};

    await next()
});

router.get("/sub", (ctx,next) => {
    ctx.body = { msg : "sub page"}
})


import { router as api } from "./api";
router.use("/api", api.routes() );



app.use(json())
app.use(logger())

app.use(router.routes())
app.use(router.allowedMethods())


app.listen(4000, () =>{

    console.log("heellelelelel")
})