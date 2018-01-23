const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const isMinify = process.argv.indexOf('-p') !== -1
const cache = {
  loader: 'cache-loader',
  options: {
    cacheDirectory: path.resolve(__dirname, '../node_modules/.cache-loader')
  }
}

module.exports = {
  entry: {
    'drips': './packages/index.js'
  },
  output: {
    filename: isMinify ? '[name].min.js' : '[name].js',
    path: path.resolve(__dirname, '../lib'),
    library: 'drips',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    vue: {
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue',
      root: 'Vue'
    }
  },
  resolve: {
    modules: [path.join(__dirname, '../node_modules'), 'node_modules'],
    extensions: ['.js', '.vue', '.css'],
    alias: {
      vue: 'vue/dist/vue.runtime.esm.js'
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
        test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
}
