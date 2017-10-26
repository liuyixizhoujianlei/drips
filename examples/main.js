import 'babel-polyfill'
import App from './App'
import router from './router'
import { AlertPlugin, Rules, LoadingPlugin } from 'drips'

Vue.use(AlertPlugin)
Vue.use(Rules)
Vue.use(LoadingPlugin)

new Vue({
  el: '#app',
  router,
  ...App
})

