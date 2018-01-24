// This file is auto gererated by build/bin/build-entry.js
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
  'loading': wrapper(() => import('./views/loading'), 'loading')
}
