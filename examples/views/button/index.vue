<template>
  <div class="wrap">
    <sd-button :buttonText="buttonText" :clickEvent="alert" :type="type" :size="size"></sd-button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      buttonText: '点我啊!',
      size: 'normal',
      type: 'yellow'
    }
  },
  created () {
  },
  methods: {
    alert() {
      window.alert('aaa')
    }
  }
}
</script>