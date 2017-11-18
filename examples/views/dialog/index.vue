<template>
    <sd-dialog :dialogVisible="true">
    </sd-dialog>
</template>
<script>
import { SdDialog } from 'drips'

export default {
  data() {
    return {
      isShowDialog: false
    }
  },
  components: {
    SdDialog
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
