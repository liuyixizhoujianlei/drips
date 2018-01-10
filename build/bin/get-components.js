const fs = require('fs')
const path = require('path')

module.exports = () => {
  const dirs = fs.readdirSync(path.resolve(__dirname, '../../packages'))
  const excludes = ['index.js', 'drips-css', '.DS_Store', 'mixins', 'utils']
  return dirs.filter(dir => excludes.indexOf(dir) === -1)
}
