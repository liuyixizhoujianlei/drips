/**
 * Build style entry of all components
 */

const fs = require('fs-extra')
const path = require('path')
const dependencyTree = require('dependency-tree')

const components = require('./get-components.js')()

const SEP = path.sep

components.forEach(componentName => {
  const libDir = path.resolve(__dirname, '../../lib')
  const content = analyzeDependencies(componentName, libDir).map(component => `require('../../drips-css/${component}.css')`)
  fs.outputFileSync(path.join(libDir, componentName, './style/index.js'), content.join('\n'))
})

// Analyze component dependencies
function analyzeDependencies(componentName, libDir) {
  const checkList = ['base']
  search(dependencyTree({
    directory: libDir,
    filename: path.resolve(libDir, componentName, 'index.js'),
    filter: path => path.indexOf(`drips${SEP}lib${SEP}`) !== -1
  }), checkList)
  return checkList.filter(component => checkComponentHasStyle(component))
}

function search(tree, checkList) {
  tree && Object.keys(tree).forEach(key => {
    search(tree[key], checkList)
    const component = key.split(`${SEP}drips${SEP}lib${SEP}`)[1].replace(`${SEP}index.js`, '').replace(`mixins${SEP}`, '')
    if (checkList.indexOf(component) === -1) {
      checkList.push(component)
    }
  })
}

function checkComponentHasStyle(componentName) {
  return fs.existsSync(path.join(__dirname, '../../lib/drips-css/', `${componentName}.css`))
}
