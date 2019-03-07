const Koa = require('koa')
const koaStatic = require('koa-static')
const koaStaticCache = require('koa-static-cache')
const compress = require('koa-compress')

const app = new Koa()
app.use(compress())
app.use(koaStaticCache(`${__dirname}/public`, {
  maxAge: 60 * 60 * 1000
}))
app.use(koaStatic(`${__dirname}/public`, {
  maxage: 60 * 60 * 1000
}))

app.listen(8064)
