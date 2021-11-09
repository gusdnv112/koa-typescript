import Router from "koa-router"
import * as v2Controller from "./controller"

const app = new Router()


app.get('/', (ctx) => {
    ctx.body = "here is v2"
})


app.post('/delete', v2Controller.default.delete)

export default app
