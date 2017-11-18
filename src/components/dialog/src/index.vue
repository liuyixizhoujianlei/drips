<template>
  <div class="dr-dialog">
    <x-dialog
    v-model="showValue"
    :mask-transition="maskTransition"
    :dialog-transition="dialogTransition"
    @on-hide="$emit('on-hide')"
    @on-show="$emit('on-show')">
        <div class="dialog-box">
            <div class="icon-container" @click="_closeDialog">
               <i class="icon icon-close">X</i>
            </div>
            <slot></slot>
        </div>
    </x-dialog>
  </div>
</template>

<script>
import XDialog from '../../x-dialog'

export default {
  name: 'sd-dialog',
  components: {
    XDialog
  },
  created () {
    if (typeof this.dialogVisible !== 'undefined') {
      this.showValue = this.dialogVisible
    }
  },
  props: {
    dialogVisible: Boolean,
    maskTransition: {
      type: String,
      default: 'dr-mask'
    },
    dialogTransition: {
      type: String,
      default: 'dr-dialog'
    }
  },
  data () {
    return {
      showValue: false
    }
  },
  methods: {
    _onHide () {
      this.showValue = false
    },
    _closeDialog () {
      this.showValue = false
    }
  },
  watch: {
    dialogVisible (val) {
      this.showValue = val
    },
    showValue (val) {
      this.$emit('input', val)
    }
  }
}
</script>
<style lang="less">
.dr-dialog {
  .weui-dialog {
    width: 614/7.5vw;
    max-width: 614/7.5vw;
  }
}
.dialog-box {
    width: 100%;
    position: relative;
    // text-align: left;
    min-height: 50px;
    .icon-container {
      width: 18px;
      height: 20px;
      position: absolute;
      left: 0;
      right: 0;
      text-align: center;
      display: inline-block;
      padding-top: 25px;
      padding-left: 20px;
    }
    .icon-close {
      font-size: 16px;
    }
}
</style>


