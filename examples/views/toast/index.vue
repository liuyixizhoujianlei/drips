<template>
  <div class="warp">
    <button @click="showComponentToast">自定义toast</button>
    <button @click="showPluginToast">点击插件式弹出</button>
    <Toast :content="content" :visible="isShowToast" v-model="isShowToast"></Toast>
  </div>
</template>
<script>
import { Toast } from 'drips'

export default {
  data() {
    return {
      isShowToast: false,
      content: 'dangerous'
    }
  },
  methods: {
    showComponentToast() {
      this.isShowToast = true
    },
    showPluginToast() {
      this.$drips.toast.show({
        content: '这是一些内容'
      })
    }
  },
  components: {
    Toast
  }
}
</script>

