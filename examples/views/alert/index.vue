<template>
  <div class="warp">
    <button @click="showComponentAlert">点击组件式弹出</button>
    <button @click="showPluginAlert">点击插件式弹出</button>
    <alert title="title" content="content" buttonText="确定" v-model="isShowAlert"></alert>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShowAlert: false
    }
  },
  methods: {
    showComponentAlert() {
      this.isShowAlert = true
    },

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

