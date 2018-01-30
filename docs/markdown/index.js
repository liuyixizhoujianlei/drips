// This file is auto gererated by build/bin/build-entry.js
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
  'zh-CN/button': wrapper(() => import('./zh-CN/button.md')),
  'zh-CN/changelog': wrapper(() => import('./zh-CN/changelog.md')),
  'zh-CN/confirm': wrapper(() => import('./zh-CN/confirm.md')),
  'zh-CN/dialog': wrapper(() => import('./zh-CN/dialog.md')),
  'zh-CN/intro': wrapper(() => import('./zh-CN/intro.md')),
  'zh-CN/layout': wrapper(() => import('./zh-CN/layout.md')),
  'zh-CN/loading': wrapper(() => import('./zh-CN/loading.md')),
  'zh-CN/quickstart': wrapper(() => import('./zh-CN/quickstart.md')),
  'zh-CN/toast': wrapper(() => import('./zh-CN/toast.md'))
}
