<style lang="less" scoped>
.tips-wrap {
  position: fixed;
  top: 45%;
  left: 0;
  width: 100%;
  text-align: center;
  transition: opacity .3s;
  z-index: 999999;
  .tips {
    display: inline-block;
    height: 140/2px;
    line-height: 140/2px;
    font-size: 30/2px;
    padding: 0 68/2px;
    border-radius: 8/2px;
    background-color: rgba(0, 0, 0, 0.6);
    color: #fff;
  }
}
.fade-enter-active,
.fade-leave-active {
  opacity: 0;
}
</style>
<template>
  <div class="toast">
    <div class="tips-wrap" v-show="showValue">
      <span class="tips" v-show="showValue">{{content}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'toast',
  data () {
    return {
      showValue: false
    }
  },
  props: {
    content: {
      type: String,
      default: ''
    },

    visible: {
      type: Boolean,
      twoWay: true
    }
  },
  watch: {
    visible (val) {
      this.showValue = val
      if (val) {
        this.$el.style.opacity = 1

        setTimeout(() => {
          this.$el.style.opacity = 0
        }, 1500)

        setTimeout(() => {
          this.showValue = false
        }, 1600)
      }
    },
    showValue (val) {
      this.$emit('input', val)
    }
  }
}
</script>
