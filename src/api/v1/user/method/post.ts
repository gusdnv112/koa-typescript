import * as koa from "koa";
import * as Router from "koa-router";
import { service as userService }from "services/user";
import * as koaBody from "koa-body";
import * as koaBodyParser from "koa-bodyparser";
export const router = new Router();
// router.use(koaBodyParser());
router.post("/",koaBody(), post);

async function post(ctx: koa.Context): Promise<void> {

    const params = ctx.request.body['params'] ;

    try{

        const result = await userService.insert(params.id,params.name,params.age);

        ctx.status = 200;
        ctx.body = { msg : "hello", params }
    }
    catch{
            console.error("Cannot insert")
    }
}

interface IStuff{
    id:number,
    name:string,
    age:number
}