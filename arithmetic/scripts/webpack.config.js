const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const { resolve } = require('path')

const dist = resolve(__dirname, '../dist')
const src = resolve(__dirname, '../src')

const mode = process.env.NODE_ENV === 'development' ? 'development' : 'production'

module.exports = {
  mode,
  devServer: {
    open: true
  },
  entry: {
    app: resolve(src, 'index.js')
  },
  output: {
    filename: '[name].[chunkhash:8].js',
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
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader'
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.js',
      '@': src
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(src, './index.html')
    }),
    new CopyWebpackPlugin([{
      from: resolve(src, './favicon.ico')
    }]),
    new VueLoaderPlugin()
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
}
