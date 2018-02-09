import Vue from 'vue'
import VueRouter from 'vue-router'
import Drips from 'packages'
import 'packages/drips-css/src/index.css'

import App from './WapApp'
import routes from './router.config'
import isMobile from './utils/is-mobile'

require('hammer-touchemulator')()

Vue.use(Drips)
Vue.use(VueRouter)

const routesConfig = routes(true)

const router = new VueRouter({
  mode: 'hash',
  base: '/drips/examples',
  routes: routesConfig
})

router.beforeEach((route, redirect, next) => {
  if (!isMobile && window === window.top) {
    location.replace('/drips/' + location.hash)
  }
  document.title = route.meta.title || document.title
  next()
})

window.vueRouter = router

new Vue({ // eslint-disable-line
  render: h => h(App),
  router,
  el: '#app'
})
