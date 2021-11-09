import exp from "constants";
import Router from "koa-router" 
import route1 from "./v1";
import route2 from "./v2";

const api = new Router()

api.get("/", (ctx,next) => {
    ctx.body = { msg : "GET : " + ctx.request.path};
});

api.use("/v1", route1.routes())

api.use("/v2", route2.routes())

export default api;
