// This file is auto gererated by build/bin/build-entry.js
import Button from './button'
import Col from './col'
import Confirm from './confirm'
import Dialog from './dialog'
import Icon from './icon'
import Loading from './loading'
import Row from './row'
import Toast from './toast'

const version = '0.0.1'
const components = [
  Button,
  Col,
  Confirm,
  Dialog,
  Icon,
  Loading,
  Row,
  Toast
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
  Button,
  Col,
  Confirm,
  Dialog,
  Icon,
  Loading,
  Row,
  Toast
}

export default {
  install,
  version
}
