// This file is auto gererated by build/bin/build-entry.js
import './common'

function wrapper(component, name) {
  component = component.default
  component.name = 'demo-' + name
  return component
}

export default {
  'loading': r => require.ensure([], () => r(wrapper(require('./views/loading'), 'loading')), 'loading')
}
