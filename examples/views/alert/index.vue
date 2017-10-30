<template>
  <div class="warp">
    <button @click="showPluginAlert">点击插件式弹出</button>
  </div>
</template>
<script>
export default {
  methods: {
    showPluginAlert() {
      this.$drips.alert.show({
        title: '测试测试',
        content: '测试测试',
        buttonText: '知道了'
      })
    }
  }
}
</script>
<style lang="less">
</style>

