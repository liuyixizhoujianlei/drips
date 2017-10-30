import ToastComponent from '../../components/toast'

let $vm

const plugin = {
  install (Vue) {
    if (!$vm) {
      const Toast = Vue.extend(ToastComponent)
      $vm = new Toast({
        el: document.createElement('div')
      })
      document.body.appendChild($vm.$el)
    }

    const toast = {
      show (options = {}) {
        if (typeof options === 'object') {
          Object.assign($vm, options)
        } else if (typeof options === 'string') {
          $vm.content = options
        }

        this.watcher && this.watcher()
        this.watcher = $vm.$watch('showValue', (val) => {
          val && options.onShow && options.onShow($vm)
          if (val === false && options.onHide) {
            options.onHide($vm)
            this.watcher && this.watcher()
          }
        })
        $vm.showValue = true
        setTimeout((res) => {
          $vm.showValue = false
        }, 1600)
      }
    }

    if (!Vue.$drips) {
      Vue.$drips = {
        toast
      }
    } else {
      Vue.$drips.toast = toast
    }

    Vue.mixin({
      created: function () {
        this.$drips = Vue.$drips
      }
    })
  }
}

export default plugin
