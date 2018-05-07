const Koa = require('koa')
const Static = require('koa-static')

const koa = new Koa()

koa.use(Static(__dirname + '/../dist'))

koa.listen(80, () => {
  console.log(`arithmetic server is running on port 80`)
})
