<template>
  <demo-section>
    <demo-block title="文字提示">
      <drip-button @click="showToast">文字提示</drip-button>
    </demo-block>

    <demo-block title="加载提示">
      <drip-button @click="showLoadingToast">加载提示</drip-button>
    </demo-block>

    <demo-block title="成功失败提示">
      <drip-button @click="showSuccessToast">成功提示</drip-button>
      <drip-button @click="showFailToast">失败提示</drip-button>
    </demo-block>

    <demo-block title="高级用法">
      <drip-button @click="showCustomizedToast">高级用法</drip-button>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  methods: {
    showToast() {
      this.$toast('我是一句简单的文字提示~')
    },

    showLoadingToast() {
      this.$toast.loading({ mask: true })
    },

    showSuccessToast() {
      this.$toast.success('成功文案')
    },

    showFailToast() {
      this.$toast.fail('失败文案')
    },

    showCustomizedToast() {
      const toast = this.$toast.loading({
        duration: 0,
        message: '倒计时3s'
      })

      let second = 3
      const timer = setInterval(() => {
        second--
        if (second) {
          toast.message = `倒计时${second}s`
        } else {
          clearInterval(timer)
          this.$toast.clear()
        }
      }, 1000)
    }
  }
}
</script>

<style lang="postcss">
.demo-toast {
  .drip-button {
    margin-left: 15px;
  }
}
</style>
