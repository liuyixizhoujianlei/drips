<template>
  <div class="warp">
    <button @click="showComponentAlert">自定义弹窗</button>
    <x-dialog v-model="isShowDialog">
      <div class="test">
        这是一个自定义的弹窗
        <button @click="isShowDialog = false">X</button>
      </div>
    </x-dialog>
  </div>
</template>
<script>
import { XDialog } from 'drips'

export default {
  data() {
    return {
      isShowDialog: false
    }
  },
  components: {
    XDialog
  },
  methods: {
    showComponentAlert() {
      this.isShowDialog = true
    }
  }
}
</script>

