import loadingComponent from '../../components/loading'

let $vm

const plugin = {
  install (Vue) {
    if (!$vm) {
      const Loading = Vue.extend(loadingComponent)
      $vm = new Loading({
        el: document.createElement('div')
      })
      document.body.appendChild($vm.$el)
    }

    const loading = {
      show (options = {}) {
        if (typeof options === 'object') {
          Object.assign($vm, options)
        } else if (typeof options === 'string') {
          $vm.content = options
        }

        this.watcher && this.watcher()
        this.watcher = $vm.$watch('isShow', (val) => {
          val && options.onShow && options.onShow($vm)
          if (val === false && options.onHide) {
            options.onHide($vm)
            this.watcher && this.watcher()
          }
        })
        $vm.isShow = true
      },

      hide () {
        $vm.isShow = false
        this.watcher && this.watcher()
        this.watcher = null
      }
    }

    if (!Vue.$drips) {
      Vue.$drips = {
        loading
      }
    } else {
      Vue.$drips.loading = loading
    }

    Vue.mixin({
      created: function () {
        this.$drips = Vue.$drips
      }
    })
  }
}

export default plugin
