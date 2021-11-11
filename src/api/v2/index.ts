import * as Router from "koa-router"
import * as v2Controller from "./controller"

export const router = new Router()


router.get('/', (ctx) => {
    ctx.body = "here is v2"
})


router.post('/delete', v2Controller.default.delete)
