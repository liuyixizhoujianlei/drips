<template>
  <div class="dr-alert">
    <x-dialog
    v-model="showValue"
    :mask-transition="maskTransition"
    :dialog-transition="dialogTransition"
    @on-hide="$emit('on-hide')"
    @on-show="$emit('on-show')">
      <div class="weui-dialog__hd">
        <strong class="weui-dialog__title">{{title}}</strong>
      </div>
      <div class="weui-dialog__bd">
        <slot>
          <div v-html="content"></div>
        </slot>
      </div>
      <div class="weui-dialog__ft">
        <a href="javascript:;"
        class="weui-dialog__btn weui-dialog__btn_primary"
        @click="_onHide">{{buttonText}}</a>
      </div>
    </x-dialog>
  </div>
</template>

<script>
import XDialog from '../../x-dialog'

export default {
  name: 'DrAlert',
  components: {
    XDialog
  },
  created () {
    if (typeof this.value !== 'undefined') {
      this.showValue = this.value
    }
  },
  props: {
    value: Boolean,
    title: String,
    content: String,
    buttonText: String,
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
    }
  },
  watch: {
    value (val) {
      this.showValue = val
    },
    showValue (val) {
      this.$emit('input', val)
    }
  }
}
</script>
