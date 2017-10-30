import ConfirmComponent from '../../components/confirm'

let $vm

const plugin = {
  install (Vue) {
    if (!$vm) {
      const Confirm = Vue.extend(ConfirmComponent)
      $vm = new Confirm({
        el: document.createElement('div')
      })
      document.body.appendChild($vm.$el)
    }

    const confirm = {
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
      },

      hide () {
        $vm.showValue = false
        this.watcher && this.watcher()
        this.watcher = null
      }
    }

    if (!Vue.$drips) {
      Vue.$drips = {
        confirm
      }
    } else {
      Vue.$drips.confirm = confirm
    }

    Vue.mixin({
      created: function () {
        this.$drips = Vue.$drips
      }
    })
  }
}

export default plugin
