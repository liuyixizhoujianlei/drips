import Vue from 'vue'
import ConfirmComponent from './confirm'

let instance

const defaultOptions = {
  value: true,
  title: '',
  message: '',
  overlay: true,
  lockOnScroll: true,
  confirmButtonText: '',
  cancelButtonText: '',
  showConfirmButton: true,
  showCancelButton: true,
  reverseButton: false,
  closeOnClickOverlay: false,
  callback: action => {
    instance[action === 'confirm' ? 'resolve' : 'reject'](action)
  }
}

const initInstance = () => {
  if (!instance) {
    const ConfirmConstructor = Vue.extend(ConfirmComponent)
    instance = new ConfirmConstructor({
      el: document.createElement('div')
    })

    instance.$on('input', value => {
      instance.value = value
    })

    document.body.appendChild(instance.$el)
  }
}

const Confirm = (options = {}) => {
  return new Promise((resolve, reject) => {
    initInstance()

    options = typeof options === 'object' ? options : { message: options }
    options = { ...defaultOptions, ...options }

    Object.assign(instance, {
      resolve,
      reject,
      ...options
    })
  })
}

Confirm.alert = (options = {}) => {
  options = typeof options === 'object' ? options : { message: options }

  return Confirm({
    showCancelButton: false,
    ...options
  })
}

Confirm.close = () => {
  instance.value = false
}

Confirm.install = Vue => {
  Vue.Confirm = Vue.prototype.$confirm = Confirm
}

export default Confirm
