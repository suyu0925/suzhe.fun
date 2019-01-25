const Koa = require('koa')
const Static = require('koa-static')

const logger = console
const koa = new Koa()

koa.use(Static(__dirname + '/../dist'))

koa.listen(80, () => {
  logger.info(`arithmetic server is running on port 80`)
})
