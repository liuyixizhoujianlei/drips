<template>
  <transition name="drip-fade">
    <div class="drip-toast-wrapper" v-show="visible">
      <div class="drip-toast" :class="[`drip-toast--${displayStyle}`, `drip-toast--${position}`]">
        <!-- text only -->
        <div v-if="displayStyle === 'text'">{{ message }}</div>
        <div v-if="displayStyle === 'html'" v-html="message" />

        <!-- with icon -->
        <template v-if="displayStyle === 'default'">
          <loading v-if="type === 'loading'" color="white" />
          <icon v-else class="drip-toast__icon" :name="type" />
          <div v-if="message != null" class="drip-toast__text">{{ message }}</div>
        </template>
      </div>
      <div class="drip-toast__overlay" :class="{ 'drip-toast__overlay--mask': mask }" v-if="forbidClick || mask" />
    </div>
  </transition>
</template>

<script>
import { create } from '../utils'

const DEFAULT_STYLE_LIST = ['success', 'fail', 'loading']

export default create({
  name: 'drip-toast',

  props: {
    mask: Boolean,
    message: [String, Number],
    forbidClick: Boolean,
    type: {
      type: String,
      default: 'text'
    },
    position: {
      type: String,
      default: 'middle'
    }
  },

  data() {
    return {
      visible: false
    }
  },

  computed: {
    displayStyle() {
      return DEFAULT_STYLE_LIST.indexOf(this.type) !== -1 ? 'default' : this.type
    }
  },

  mounted() {
    this.handleState = () => {
      this.clear()
    }
    window.addEventListener('popstate', this.handleState)
  },

  beforeDestroy() {
    window.removeEventListener('popstate', this.handleState)
  }
})
</script>
