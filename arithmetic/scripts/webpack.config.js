const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const { resolve } = require('path')

const dist = resolve(__dirname, '../dist')
const src = resolve(__dirname, '../src')

module.exports = {
  mode: 'none',
  devServer: {
    open: true
  },
  entry: {
    app: resolve(src, 'index.js')
  },
  output: {
    filename: 'bundle.js',
    path: dist,
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.js'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(src, './index.html')
    }),
    new VueLoaderPlugin()
  ]
}
