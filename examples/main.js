import 'babel-polyfill'
import App from './App'
import router from './router'
import { AlertPlugin, Rules } from 'drips'

Vue.use(AlertPlugin)
Vue.use(Rules)

new Vue({
  el: '#app',
  router,
  ...App
})

