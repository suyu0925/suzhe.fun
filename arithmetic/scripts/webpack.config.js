const { resolve } = require('path')
const dist = resolve(__dirname, '../dist')
const src = resolve(__dirname, '../src')

console.log('dist', dist, 'src', src)

module.exports = {
  entry: {
    app: resolve(src, 'index.js')
  },
  output: {
    filename: 'bundle.js',
    path: dist,
    publicPath: '/'
  }
}
