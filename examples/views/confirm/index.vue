<template>
  <div class="warp">
    <button @click="showComponentConfirm">自定义弹窗{{isShowDialog}}</button>
    <button @click="showPluginConfirm">点击插件式弹出</button>
    <Confirm v-model="isShowDialog" :title="title" :content="content" :confirm-text="'确定哟'" :cancel-text="'取消哟'"></Confirm>
  </div>
</template>
<script>
import { Confirm } from 'drips'

export default {
  data() {
    return {
      isShowDialog: false,
      title: '标题',
      content: '三点撒'
    }
  },
  components: {
    Confirm
  },
  methods: {
    showComponentConfirm() {
      this.isShowDialog = true
    },
    showPluginConfirm() {
      this.$drips.confirm.show({
        title: '这是一个title',
        content: '这是一些内容',
        confirmText: '确认哟',
        cancelText: '取消哟'
      })
    }
  }
}
</script>

