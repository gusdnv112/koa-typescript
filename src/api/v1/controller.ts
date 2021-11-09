import { request } from "http";
import { Context } from "koa";


export default class v2Controller{

    public static async insert(ctx: Context): Promise<void> {
        ctx.body = { msg : "insert success "}
    }

    public static async update(ctx: Context): Promise<void> {
        ctx.body = { msg : "update success "}
    }

}