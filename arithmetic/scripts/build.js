const webpack = require('webpack')
const webpackConfig = require('./webpack.config')
const logger = console

webpack(webpackConfig, (err, stats) => {
  logger.info('Build complete.')
})
