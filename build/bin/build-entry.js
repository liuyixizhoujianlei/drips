const fs = require('fs')
const path = require('path')
const uppercamelcase = require('uppercamelcase')

const Components = require('./get-components')()
const version = process.env.VERSION || require('../../package.json').version
const tips = '// This file is auto gererated by build/bin/build-entry.js'

// generate components entry
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

// generate docs entry
function buildDocsEntry() {
  const dir = path.join(__dirname, '../../docs/markdown')
  const cnDocs = fs.readdirSync(path.join(dir, 'zh-CN')).map(name => 'zh-CN/' + name)
  const docs = [...cnDocs]
    .filter(name => name.endsWith('.md'))
    .map(name => {
      name = name.replace(/\.md$/, '')
      return `'${name}': wrapper(() => import('./${name}.md'))`
    })

  const content = `${tips}
import progress from 'nprogress'
import 'nprogress/nprogress.css'

function wrapper(r) {
  return (...args) => {
    progress.start()
    return r.apply(args).then(component => {
      progress.done()
      return component
    }).catch(() => {
      progress.done()
    })
  }
}

export default {
  ${docs.join(',\n  ')}
}
`
  fs.writeFileSync(path.join(__dirname, '../../docs/markdown/index.js'), content)
}

// generate examples entry
function buildExamplesEntry() {
  const dir = path.join(__dirname, '../../docs/examples/views')
  const examples = fs.readdirSync(dir)
    .filter(name => name.endsWith('.vue'))
    .map(name => {
      name = name.replace(/\.vue$/, '')
      return `'${name}': wrapper(() => import('./views/${name}'), '${name}')`
    })

  const content = `${tips}
import './common'

function wrapper(r, name) {
  return (...args) => {
    return r.apply(args).then(component => {
      component = component.default
      component.name = 'demo-' + name
      return component
    })
  }
}

export default {
  ${examples.join(',\n  ')}
}
`
  fs.writeFileSync(path.join(__dirname, '../../docs/examples/index.js'), content)
}

buildDripsEntry()
buildDocsEntry()
buildExamplesEntry()
