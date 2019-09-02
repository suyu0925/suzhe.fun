const Koa = require('koa')
const Static = require('koa-static')

const port = 8200
const logger = console
const koa = new Koa()

koa.use(Static(__dirname + '/../dist'))

koa.listen(port, () => {
  logger.info(`arithmetic server is running on port ${port}`)
})
