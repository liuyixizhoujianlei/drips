import Swiper from './src'

Swiper.install = function (Vue) {
  Vue.component(Swiper.name, Swiper)
}

export default Swiper
