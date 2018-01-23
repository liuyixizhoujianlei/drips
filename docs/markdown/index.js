// This file is auto gererated by build/bin/build-entry.js
import progress from 'nprogress'
import 'nprogress/nprogress.css'

function wrapper(component) {
  return function(r) {
    progress.start()
    component(r).then(() => {
      progress.done()
    }).catch(() => {
      progress.done()
    })
  }
}

export default {
  'zh-CN/intro': wrapper(r => require.ensure([], () => r(require('./zh-CN/intro.md')), 'zh-CN/intro')),
  'zh-CN/loading': wrapper(r => require.ensure([], () => r(require('./zh-CN/loading.md')), 'zh-CN/loading'))
}
