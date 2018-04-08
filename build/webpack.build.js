const path = require('path')
const config = require('./webpack.config.dev')

const isMinify = process.argv.indexOf('-p') !== -1

module.exports = Object.assign({}, config, {
  mode: 'production',
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
  plugins: [],
  performance: false,
  optimization: {
    minimize: isMinify
  }
})
