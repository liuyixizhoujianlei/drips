/**
 * Build npm lib
 * Steps:
 * 1. 代码格式校验
 * 2. 构建 JS 入口文件
 * 3. 构建每个组件对应的 [component].js
 * 4. 构建 drips-css
 * 5. 打包 JS 文件：drips.js && drips.min.js
 * 6. 生成每个组件目录下的 style 入口
 */

const chalk = require('chalk')
const shell = require('shelljs')

// 1. lint
log('Starting', 'lint')
shell.exec('npm run lint --silent')
log('Finished', 'lint')

// 2. build entry
log('Starting', 'build:entry')
shell.exec('npm run build:entry --silent')
log('Finished', 'build:entry')

// 3. build [component].js
log('Starting', 'build:components')
shell.exec('npm run build:components --silent')
log('Finished', 'build:components')

// 4. build drips-css
log('Starting', 'build:drips-css')
shell.exec('npm run build:drips-css --silent')
log('Finished', 'build:drips-css')

// 5. build drips.js
log('Starting', 'build:drips')
shell.exec('npm run build:drips --silent')
log('Finished', 'build:drips')

// 6. build style entry
log('Starting', 'build:style-entry')
shell.exec('npm run build:style-entry --silent')
log('Finished', 'build:style-entry')

function log(status, action, breakLine) {
  const now = new Date()
  const clock = `${breakLine ? '\n' : ''}[${padZero(now.getHours())}:${padZero(now.getMinutes())}:${padZero(now.getSeconds())}]`
  console.log(`${chalk.gray(clock)} ${status} '${action ? chalk.cyan.bold(action) : ''}'`)
}

function padZero(n) {
  return (n < 10 ? '0' : '') + n
}
