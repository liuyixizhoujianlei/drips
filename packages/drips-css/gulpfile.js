const gulp = require('gulp')
const postcss = require('gulp-postcss')
const cssmin = require('gulp-clean-css')
const iconfont = require('gulp-iconfont')
const iconfontCss = require('gulp-iconfont-css')
const fs = require('fs-extra')
const sketch = require('gulp-sketch')
const which = require('npm-which')(__dirname)
const gutil = require('gulp-util')
const config = require('./assets/icon-config')
const path = require('path')
const md5File = require('md5-file')
const glob = require('glob')

const resolve = relativePath => path.resolve(__dirname, relativePath)

// compile component css
gulp.task('compile', () => {
  return gulp
    .src('./src/*.css')
    .pipe(postcss())
    .pipe(cssmin())
    .pipe(gulp.dest('./lib'))
})

// copy lib files
gulp.task('lib', ['compile'], () => {
  const ttfs = glob.sync(resolve('./src/*.ttf'))
  ttfs.forEach(ttf => fs.copy(ttf, './lib/' + path.parse(ttf).base))
  fs.copy('./lib/', '../../lib/drips-css')
})

// extract svg from sketch
gulp.task('extract-svg', () => {
  try {
    which.sync('sketchtool')
  } catch (error) {
    gutil.log(error)
    return
  }

  fs.removeSync(resolve('./icons'))
  return gulp.src('./assets/icons.sketch')
    .pipe(sketch({
      export: 'slices',
      formats: 'svg',
      saveForWeb: true
    }))
    .pipe(gulp.dest('./icons'))
})

// rename svg
gulp.task('generate-svg', ['extract-svg'], () => {
  config.glyphs.forEach(icon => {
    const src = path.join(__dirname, './icons/', icon.src)
    if (fs.existsSync(src)) {
      fs.renameSync(src, path.join(__dirname, './icons', icon.css + '.svg'))
    }
  })
})

// get icon unicode
function getCodePoints() {
  const codePoints = {}
  config.glyphs.forEach((icon, index) => {
    const svgPath = path.join(__dirname, './icons/', icon.css + '.svg')
    if (fs.existsSync(svgPath)) {
      codePoints[icon.css] = 0xf000 + index
    }
  })
}

// generate ttf from sketch && build icon.css
gulp.task('icon-font-ttf', ['generate-svg'], () => {
  return gulp
    .src(['icons/*.svg'])
    .pipe(
      iconfontCss({
        fontName: config.name,
        path: 'assets/icon-template.css',
        targetPath: './icon.css',
        normalize: true,
        firstGlyph: 0xf000,
        fixedCodepoints: getCodePoints()
      })
    )
    .pipe(
      iconfont({
        fontName: config.name,
        formats: ['ttf']
      })
    )
    .on('glyphs', (glyphs, options) => {})
    .pipe(gulp.dest('icons'))
})

gulp.task('icon-font', ['icon-font-ttf'], () => {
  // remove previous ttf
  const prevTTFs = glob.sync(resolve('./src/*.ttf'))
  prevTTFs.forEach(ttf => fs.removeSync(ttf))

  // generate ttf hash
  const fontPath = resolve('./icons/drips-icon.ttf')
  const hash = md5File.sync(fontPath).slice(0, 6)
  fs.renameSync(fontPath, resolve(`./src/drips-icon-${hash}.ttf`))

  // copy icon.css to src
  let source = fs.readFileSync(resolve('./icons/icon.css'), 'utf-8')
  source = source.replace('drips-icon.ttf', `drips-icon-${hash}.ttf`)
  fs.writeFileSync(resolve('./src/icon.css'), source)
})

gulp.task('build', ['lib'])
