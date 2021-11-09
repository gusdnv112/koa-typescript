import Koa from "koa";
import Router from "koa-router";

import logger from "koa-logger";
import json from "koa-json";
import api from "./api";


const app = new Koa();
const router = new Router()
router.get("/", async (ctx,next) => { 
    ctx.body = { msg : "hello first ts"};

    await next()
});

router.get("/sub", (ctx,next) => {
    ctx.body = { msg : "sub page"}
})

router.use("/api", api.routes() );



app.use(json())
app.use(logger())

app.use(router.routes())
app.use(router.allowedMethods())


app.listen(4000, () =>{

    console.log("heellelelelel")
})