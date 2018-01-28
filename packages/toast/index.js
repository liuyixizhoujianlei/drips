import Vue from 'vue'
import VueToast from './toast'

let instance

const defaultOptions = {
  type: 'text',
  message: null,
  mask: false,
  visible: true,
  duration: 2500,
  position: 'middle',
  forbidClick: false,
  clear: () => {
    instance.visible = false
  }
}

const createInstance = () => {
  if (!instance) {
    const ToastConstructor = Vue.extend(VueToast)
    instance = new ToastConstructor({
      el: document.createElement('div')
    })
    window.instance = instance
    document.body.appendChild(instance.$el)
  }
}

const Toast = (options = {}) => {
  createInstance()

  options = typeof options === 'object' ? options : { message: options }
  options = { ...defaultOptions, ...options }
  Object.assign(instance, options)

  clearTimeout(instance.timer)

  if (instance.duration !== 0) {
    instance.timer = setTimeout(() => {
      instance.clear()
    }, options.duration)
  }

  return instance
}

const createMethod = type => (options = {}) => {
  options = typeof options === 'object' ? options : { message: options }

  return Toast({
    type,
    ...options
  })
}

Toast.loading = createMethod('loading')
Toast.success = createMethod('success')
Toast.fail = createMethod('fail')
Toast.clear = () => {
  instance && instance.clear()
}

Toast.install = Vue => {
  Vue.Toast = Vue.prototype.$toast = Toast
}

export default Toast
