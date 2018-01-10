import Vue from 'vue'
import create from './create'

const isServer = Vue.prototype.$isServer

function isDef(v) {
  return v !== undefined && v !== null
}

function get(object, path) {
  const keys = path.split('.')
  let result = object

  keys.forEach(key => {
    result = isDef(result[key]) ? result[key] : ''
  })

  return result
}

const camelizeRE = /-(\w)/g
function camelize(str) {
  return str.replace(camelizeRE, (_, c) => c.toUpperCase())
}

export {
  get,
  isDef,
  create,
  isServer,
  camelize
}
