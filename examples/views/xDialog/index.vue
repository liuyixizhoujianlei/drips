<template>
  <div class="warp">
    <button @click="showComponentAlert">自定义弹窗</button>
    <x-dialog v-model="isShowDialog">
      <div class="test">
        这是一个自定义的弹窗
        <div class="buttons">
          <sd-button class="aa" :clickEvent="hideComponentAlert" buttonText="取消" size="small"></sd-button>
          <sd-button class="bb" :clickEvent="hideComponentAlert" buttonText="确定" type="yellow" size="small"></sd-button>
        </div>
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
    },
    hideComponentAlert() {
      this.isShowDialog = false
    }
  }
}
</script>
<style>
  .buttons {
    display: flex;
  }
  .aa, .bb {
    flex: 1;
    margin: 10px 10px;
  }
</style>
