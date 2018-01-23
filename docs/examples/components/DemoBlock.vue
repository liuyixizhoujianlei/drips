<template>
  <div class="drip-demo-block">
    <h2 class="drip-demo-block__title">{{ title }}</h2>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'drip-demo-block',

  props: {
    title: String
  }
}
</script>

<style lang="postcss">
.drip-demo-block {
  &__title {
    margin: 0;
    font-weight: normal;
    font-size: 14px;
    color: rgba(69, 90, 100, .6);
    padding: 40px 15px 10px;
  }
}
</style>
