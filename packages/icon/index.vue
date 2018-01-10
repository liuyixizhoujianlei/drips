<template>
  <i class="drip-icon" :class="`drip-icon-${name}`">
    <slot />
    <div v-if="info" class="drip-icon__info">{{ info }}</div>
  </i>
</template>

<script>
import install from '../utils/install'

export default {
  install,

  name: 'drip-icon',

  props: {
    name: String,
    info: String
  }
}
</script>
