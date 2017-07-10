import Alert from './src'

Alert.install = function(Vue) {
  Vue.component(Alert.name, Alert)
}

export default Alert

