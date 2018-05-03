const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolve } = require('path')

const dist = resolve(__dirname, '../dist')
const src = resolve(__dirname, '../src')

module.exports = {
  mode: 'none',
  entry: {
    app: resolve(src, 'index.js')
  },
  output: {
    filename: 'bundle.js',
    path: dist,
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(src, './index.html')
    })
  ],
  devServer: {
    open: true
  }
}
