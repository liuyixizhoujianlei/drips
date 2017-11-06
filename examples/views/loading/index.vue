<template>
  <div>
    <button @click="showComponentLoading">组件loading</button>
    <button @click="showPluginLoading">插件loading</button>
    <loading v-model="isShowLoading" :loadinTips="loadinTips"></loading>
  </div>
</template>
<script>
import { Loading } from 'drips'

export default {
  data() {
    return {
      isShowLoading: false,
      loadinTips: '组件加载中'
    }
  },
  components: {
    Loading
  },
  methods: {
    showComponentLoading() {
      this.isShowLoading = true
    },
    showPluginLoading() {
      this.$drips.loading.show({
        loadinTips: '插件加载中'
      })
    }
  }
}
</script>

