<template>
  <demo-section>
    <demo-block title="消息提示">
      <drip-button @click="onClickAlert">Alert</drip-button>
      <drip-button @click="onClickAlert2">无标题</drip-button>
    </demo-block>

    <demo-block title="消息确认">
      <drip-button @click="onClickConfirm">Confirm</drip-button>
      <drip-button @click="onClickConfirm2">反转Confirm</drip-button>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  methods: {
    onClickAlert() {
      this.$confirm.alert({
        title: '消息提示',
        message: '这是一段内容'
      })
    },

    onClickAlert2() {
      this.$confirm.alert('这是一段内容')
    },

    onClickConfirm() {
      this.$confirm({
        title: '消息确认',
        message: '这是一段内容'
      }).then(action => {
        console.log(action)
      }, (action) => {
        console.log(action)
      })
    },

    onClickConfirm2() {
      this.$confirm({
        title: '消息确认',
        message: '这是一段内容',
        reverseButton: true
      }).then(action => {
        console.log(action)
      }, (action) => {
        console.log(action)
      })
    }
  }
}
</script>

<style lang="postcss">
.demo-confirm {
  .drip-button {
    margin: 15px;
  }
}
</style>
