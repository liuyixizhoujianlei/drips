import Preview from './src'

Preview.install = function(Vue) {
  Vue.component(Preview.name, Preview)
}

export default Preview
