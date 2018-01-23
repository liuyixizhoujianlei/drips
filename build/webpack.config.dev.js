const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const isProduction = process.env.NODE_ENV === 'production'
const cache = {
  loader: 'cache-loader',
  options: {
    cacheDirectory: path.resolve(__dirname, '../node_modules/.cache-loader')
  }
}

module.exports = {
  entry: {
    vendor: ['packages'],
    'drips-docs': './docs/src/index.js',
    'drips-examples': './docs/src/examples.js'
  },
  output: {
    path: path.join(__dirname, '../docs/dist'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: 'async_[name].js'
  },
  devServer: {
    host: '0.0.0.0',
    historyApiFallback: {
      rewrites: [
        { from: /^\/drips\/examples/, to: '/examples.html' },
        { from: /^\/drips/, to: '/index.html' }
      ]
    },
    stats: 'errors-only'
  },
  resolve: {
    modules: [path.join(__dirname, '../node_modules'), 'node_modules'],
    extensions: ['.js', '.vue', '.css'],
    alias: {
      vue: 'vue/dist/vue.runtime.esm.js',
      packages: path.join(__dirname, '../packages'),
      lib: path.join(__dirname, '../lib'),
      components: path.join(__dirname, '../docs/src/components')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          cache,
          {
            loader: 'vue-loader',
            options: {
              preserveWhitespace: false,
              extractCSS: true
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          cache,
          'babel-loader'
        ]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            'css-loader',
            'postcss-loader'
          ]
        })
      },
      {
        test: /\.md/,
        use: [
          cache,
          'vue-loader',
          'fast-vue-md-loader'
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
        loader: 'url-loader'
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new ProgressBarPlugin(),
    new HtmlWebpackPlugin({
      chunks: ['vendor', 'drips-docs'],
      template: 'docs/src/index.html',
      filename: 'index.html',
      inject: true
    }),
    new HtmlWebpackPlugin({
      chunks: ['vendor', 'drips-examples'],
      template: 'docs/src/index.html',
      filename: 'examples.html',
      inject: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: 2,
      filename: isProduction ? 'vendor.[hash:8].js' : 'vendor.js'
    }),
    new ExtractTextPlugin({
      filename: isProduction ? '[name].[hash:8].css' : '[name].css',
      allChunks: true
    }),
    new FriendlyErrorsPlugin()
  ]
}
