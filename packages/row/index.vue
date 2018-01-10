<template>
  <div class="drip-row" :style="style">
    <slot />
  </div>
</template>

<script>
import { create } from '../utils'

export default create({
  name: 'drip-row',

  props: {
    gutter: {
      type: [Number, String],
      default: 0
    }
  },

  computed: {
    style() {
      const margin = `-${this.gutter / 2}px`
      return this.gutter ? { marginLeft: margin, marginRight: margin } : {}
    }
  }
})
</script>
