import 'babel-polyfill'
import App from './App'
import router from './router'
import { AlertPlugin, Rules, ConfirmPlugin, ToastPlugin, SdButton } from 'drips'

Vue.use(AlertPlugin)
Vue.use(Rules)
Vue.use(ConfirmPlugin)
Vue.use(ToastPlugin)
Vue.use(SdButton)

new Vue({
  el: '#app',
  router,
  ...App
})

