import 'babel-polyfill'
import App from './App'
import router from './router'
import { AlertPlugin, Rules, LoadingPlugin, SdButton, Checkbox, Popup } from 'drips'

Vue.use(AlertPlugin)
Vue.use(Rules)
Vue.use(LoadingPlugin)
Vue.use(AlertPlugin)
Vue.use(Rules)
Vue.use(SdButton)
Vue.use(Popup)

new Vue({
  el: '#app',
  router,
  ...App
})

