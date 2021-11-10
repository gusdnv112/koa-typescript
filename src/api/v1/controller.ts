import { request } from "http";
import { Context } from "koa";
import { userService } from "src/services/user";

export default class v2Controller{

    public static async insert(ctx: Context): Promise<void> {
        
        const result = userService.signUp();
        ctx.body = { msg : "insert success "}
    }

    public static async update(ctx: Context): Promise<void> {
        ctx.body = { msg : "update success "}
    }

}