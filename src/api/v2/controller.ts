import { request } from "http";
import { Context } from "koa";


export default class v2Controller{

    public static async delete(ctx: Context): Promise<void> {
        ctx.body = { msg : "delete success "}
    }

}