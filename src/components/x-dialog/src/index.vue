<template>
  <div class="dr-x-dialog" @touchmove="onTouchMove">
    <transition :name="maskTransition">
      <div class="weui-mask" @click="hideOnBlur && (currentValue = false)" v-show="currentValue"></div>
    </transition>
    <transition :name="dialogTransition">
      <div :class="dialogClass" v-show="currentValue" :style="dialogStyle">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'x-dialog',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    maskTransition: {
      type: String,
      default: 'dr-mask'
    },
    dialogTransition: {
      type: String,
      default: 'dr-dialog'
    },
    dialogClass: {
      type: String,
      default: 'weui-dialog'
    },
    hideOnBlur: Boolean,
    dialogStyle: Object,
    scroll: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    value: {
      handler: function (val) {
        this.currentValue = val
      },
      immediate: true
    },
    currentValue (val) {
      this.$emit(val ? 'on-show' : 'on-hide')
      this.$emit('input', val)
    }
  },
  data () {
    return {
      currentValue: false
    }
  },
  methods: {
    onTouchMove: function (event) {
      !this.scroll && event.preventDefault()
    }
  }
}
</script>
