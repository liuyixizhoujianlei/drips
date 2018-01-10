const fs = require('fs')
const path = require('path')
const uppercamelcase = require('uppercamelcase')

const Components = require('./get-components')()
const version = process.env.VERSION || require('../../package.json').version
const tips = '// This file is auto gererated by build/bin/build-entry.js'

function buildDripsEntry() {
  const uninstallComponents = [

  ]

  const importList = Components.map(name => `import ${uppercamelcase(name)} from './${name}'`)
  const exportList = Components.map(name => uppercamelcase(name))
  const installList = exportList.filter(name => !~uninstallComponents.indexOf(uppercamelcase(name)))

  const content = `${tips}
${importList.join('\n')}

const version = '${version}'
const components = [
  ${installList.join(',\n  ')}
]

const install = Vue => {
  components.forEach(Component => {
    Vue.use(Component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  install,
  version,
  ${exportList.join(',\n  ')}
}

export default {
  install,
  version
}
`

  fs.writeFileSync(path.join(__dirname, '../../packages/index.js'), content)
}

buildDripsEntry()
