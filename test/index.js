import Vue from 'vue'
import Drips from 'packages'
require('packages/drips-css/src/index.css')

Vue.use(Drips)

const testsContext = require.context('./specs', true, /.spec$/)

if (process.env.TEST_FILE) {
  testsContext.keys().forEach((file) => {
    if (file.indexOf(process.env.TEST_FILE) !== -1) {
      testsContext(file)
    }
  })
} else {
  testsContext.keys().forEach(testsContext)
}
