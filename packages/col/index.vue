<template>
  <div
    class="drip-col"
    :class="{[`drip-col-${span}`]: span, [`drip-col-offset-${offset}`]: offset}"
    :style="style"
  >
    <slot />
  </div>
</template>

<script>
import { create } from '../utils'

export default create({
  name: 'drip-col',

  props: {
    span: [String, Number],
    offset: [String, Number]
  },

  computed: {
    gutter() {
      return (this.$parent && Number(this.$parent.gutter)) || 0
    },
    style() {
      const padding = `${this.gutter / 2}px`
      return this.gutter ? { paddingLeft: padding, paddingRight: padding } : {}
    }
  }
})
</script>
