const Koa = require('koa')
const koaStatic = require('koa-static')

const app = new Koa()
app.use(koaStatic(`${__dirname}/public`))

app.listen(8064)
