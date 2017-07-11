import 'babel-polyfill'
import { Alert } from 'drips'
import App from './App'
import router from './router'

require('drips/src/styles/reset.less')
require('drips/src/styles/index.less')

Vue.use(Alert)

new Vue({
  el: '#app',
  router,
  ...App
})

