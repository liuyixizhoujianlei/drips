import 'babel-polyfill'
import Alert from 'drips'
import App from './App'
import router from './router'

Vue.use(Alert)

new Vue({
  el: '#app',
  router,
  ...App
})

