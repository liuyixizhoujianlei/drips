const path = require('path')
const webpack = require('webpack')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')

module.exports = {
  mode: 'development',
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    publicPath: '/dist/',
    filename: '[name].js',
    chunkFilename: '[id].js',
    libraryTarget: 'umd'
  },
  plugins: [
    new ProgressBarPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        TEST_FILE: `"${process.env.FILE || ''}"`
      }
    })
  ],
  resolve: {
    modules: [path.resolve(process.cwd(), 'node_modules'), 'node_modules'],
    extensions: ['.js', '.json', '.vue', '.css'],
    alias: {
      packages: path.resolve(process.cwd(), 'packages'),
      vue$: 'vue/dist/vue.common.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'istanbul-instrumenter-loader',
          options: { esModules: true }
        },
        enforce: 'post',
        exclude: /node_modules|\.spec\.js$/
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(css|pcss)$/,
        use: ['style-loader', 'css-loader', {
          loader: 'postcss-loader',
          options: { sourceMap: true }
        }]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              query: {
                limit: 10000,
                name: 'static/[name].[hash:7].[ext]'
              }
            }
          }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[hash:7].[ext]'
        }
      },
      {
        test: /test\/components\/.*\.vue$/,
        use: [
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
        test: /packages\/.*\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              preserveWhitespace: false,
              extractCSS: true
            }
          }
        ]
      }
    ]
  },
  devtool: '#inline-source-map'
}
