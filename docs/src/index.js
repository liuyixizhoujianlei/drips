import Vue from 'vue'
import VueRouter from 'vue-router'
import Drips from 'packages'
import 'packages/drips-css/src/index.css'

import App from './DocsApp'
import routes from './router.config'
import isMobile from './utils/is-mobile'
Vue.use(Drips)
Vue.use(VueRouter)

const routesConfig = routes()
const router = new VueRouter({
  mode: 'hash',
  base: '/drips/',
  routes: routesConfig
})

router.beforeEach((route, redirect, next) => {
  if (isMobile) {
    location.replace('/drips/examples' + location.hash)
  }
  document.title = route.meta.title || document.title
  next()
})

router.afterEach(() => {
  window.scrollTo(0, 0)
  Vue.nextTick(() => window.syncPath())
})

window.vueRouter = router

new Vue({ // eslint-disable-line
  render: h => h(App),
  router,
  el: '#app'
})
