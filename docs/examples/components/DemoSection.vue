<template>
  <section class="drip-demo-section" :class="`demo-${demoName}`" :style="style">
    <h1 class="drip-demo-section__title">{{ title || camelize(demoName) }}</h1>
    <slot></slot>
  </section>
</template>

<script>
const camelizeRE = /-(\w)/g

export default {
  name: 'drip-demo-section',

  props: {
    name: String,
    title: String,
    background: String
  },

  computed: {
    demoName() {
      return this.name || this.getParentName()
    },
    style() {
      return {
        minHeight: (this.$isServer ? 500 : window.innerHeight) + 'px',
        background: this.background
      }
    }
  },

  methods: {
    getParentName() {
      const { $parent } = this
      if ($parent && $parent.$options.name) {
        return $parent.$options.name.replace('demo-', '')
      }
    },
    camelize(str) {
      return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : '')
    }
  }
}
</script>

<style lang="postcss">
.drip-demo-section {
  padding-bottom: 20px;
  box-sizing: border-box;

  &__title {
    margin: 0;
    padding: 15px;
    font-size: 16px;
    line-height: 1.5;
    font-weight: normal;
    text-transform: capitalize;

    + .drip-demo-block {
      .drip-demo-block__title {
        padding-top: 0;
      }
    }
  }
}
</style>
