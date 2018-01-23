<template>
  <div class="app">
    <vue-easy-doc :simulators="simulators" :current-simulator="currentSimulator" :config="config" :base="base">
      <router-view />
    </vue-easy-doc>
  </div>
</template>

<script>
import VueEasyDoc from 'vue-easy-doc'
import docConfig from './doc.config'
const lang = 'zh-CN'

export default {
  components: { VueEasyDoc },
  data() {
    return {
      simulators: [`/drips/examples${location.hash}`],
      demoURL: ''
    }
  },

  computed: {
    base() {
      return `/${lang}/component`
    },

    config() {
      return docConfig[lang]
    },

    currentSimulator() {
      const { name } = this.$route
      return name && name.indexOf('demo') !== -1 ? 1 : 0
    }
  }
}
</script>
