<template>
  <div class="drip-loading" :class="['drip-loading--' + type, 'drip-loading--' + color]">
    <span class="drip-loading__spinner" :class="['drip-loading__spinner--' + type, 'drip-loading__spinner--' + color]">
      <i v-if="type === 'spinner'" v-for="i in 12" />
    </span>
  </div>
</template>

<script>
import install from '../utils/install'

export default {
  install,
  name: 'drip-loading',
  props: {
    type: {
      type: String,
      default: 'gradient-circle'
    },
    color: {
      type: String,
      default: 'black'
    }
  }
}
</script>
