<template>
  <component
    :is="tag"
    :type="nativeType"
    :disabled="disabled"
    class="drip-button"
    :class="[
      'drip-button--' + type,
      'drip-button--' + size,
      {
        'drip-button--disabled': disabled,
        'drip-button--loading': loading,
        'drip-button--block': block,
        'drip-button--bottom-action': bottomAction
      }
    ]"
    @click="onClick"
  >
    <loading
      v-if="loading"
      class="drip-button__icon-loading"
      type="circle"
      :color="type === 'default' ? 'black' : 'white'"
    />
    <span class="drip-button__text">
      <slot />
    </span>
  </component>
</template>

<script>
import { create } from '../utils'

export default create({
  name: 'drip-button',

  props: {
    block: Boolean,
    loading: Boolean,
    disabled: Boolean,
    nativeType: String,
    bottomAction: Boolean,
    tag: {
      type: String,
      default: 'button'
    },
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'normal'
    }
  },

  methods: {
    onClick(event) {
      if (!this.loading && !this.disabled) {
        this.$emit('click', event)
      }
    }
  }
})
</script>
