<template>
  <component
    :is="tag"
    :type="nativeType"
    :disabled="disabled"
    class="drip-button"
    :class="[
      'drip-button--' + type,
      {
        'is-disabled': disabled,
        'is-loading': loading,
        'is-normal': !block && !flat,
        'is-block': block,
        'is-flat': flat
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
    <drip-icon v-if="icon" :name="icon" />
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
    icon: String,
    nativeType: String,
    flat: Boolean,
    tag: {
      type: String,
      default: 'button'
    },
    type: {
      type: String,
      default: 'default'
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
