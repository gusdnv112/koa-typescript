import Router from "koa-router"
import * as v1Controller from "./controller"

const app = new Router()

app.get('/', (ctx) => {
    ctx.body = "here is v1"
})

app.post('/insert', v1Controller.default.insert )
app.post('/update', v1Controller.default.update )

export default app
