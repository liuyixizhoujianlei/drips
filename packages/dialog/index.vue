<template>
  <transition :name="currentTransition">
    <div v-show="value" class="drip-dialog" :class="{ [`drip-dialog--${position}`]: position }">
      <slot />
    </div>
  </transition>
</template>

<script>
import { create } from '../utils'
import Popup from '../mixins/popup'

export default create({
  name: 'drip-dialog',

  mixins: [Popup],

  props: {
    transition: String,
    overlay: {
      type: Boolean,
      default: true
    },
    lockOnScroll: {
      type: Boolean,
      default: false
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    position: {
      type: String,
      default: ''
    }
  },

  data() {
    const transition = this.transition || (this.position === '' ? 'drip-fade' : `dialog-slide-${this.position}`)
    return {
      currentTransition: transition
    }
  },

  mounted() {
    if (this.value) {
      this.open()
    }
  }
})
</script>
