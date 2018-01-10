/**
 * compile components to lib directory
 */
const fs = require('fs-extra')
const path = require('path')
const compiler = require('@sd/vue-sfc-compiler')
const babel = require('babel-core')
const resolve = relativePath => path.resolve(__dirname, relativePath)

const libDir = resolve('../../lib')
const srcDir = resolve('../../packages')
const compilerOption = {
  babel: {
    extends: resolve('../../.babelrc')
  }
}

process.env.BABEL_ENV = 'commonjs'

// clear lib
fs.emptyDirSync(libDir)

// copy packages
fs.copySync(srcDir, libDir)

// compile all .vue file to .js
compile(libDir, ['drips-css', '.DS_Store'])

function compile(dir, excludes = []) {
  const files = fs.readdirSync(dir)

  files.forEach(file => {
    const absolutePath = path.resolve(dir, file)

    // remove drips-css
    if (excludes.indexOf(file) !== -1) {
      fs.removeSync(absolutePath)
    } else
    // traverse directory
    if (isDir(absolutePath)) {
      return compile(absolutePath)
    } else
    // compile .vue file
    if (/\.vue$/.test(file)) {
      const source = fs.readFileSync(absolutePath, 'utf-8')
      fs.removeSync(absolutePath)

      const outputVuePath = absolutePath + '.js'
      const outputJsPath = absolutePath.replace('.vue', '.js')
      const outputPath = fs.existsSync(outputJsPath) ? outputVuePath : outputJsPath

      fs.outputFileSync(outputPath, compiler(source, compilerOption).js)
    } else
    // compile .js file
    if (/\.js$/.test(file)) {
      babel.transformFile(absolutePath, compilerOption.babel, (err, { code }) => {
        if (err) {
          return console.dir(err)
        }
        fs.outputFileSync(absolutePath, code)
      })
    }
  })
}

function isDir(dir) {
  return fs.lstatSync(dir).isDirectory()
}
