<style lang="less" scoped>
  .overlay {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 101;
    opacity: 1;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    transition: opacity .3s;
  }

  .fade-enter,
  .fade-leave {
    opacity: 1;
  }

  .dialog {
    width: 85%;
    max-width: 750/2px;
    flex-direction: column;
    border-radius: 6/2px;
    background-color: #fff;
    overflow: hidden;
  }

  .dialog .title {
    padding: 45/2px 22/2px 18/2px;
    font-size: 38/2px;
    line-height: 65/2px;
    text-align: center;
    word-wrap: break-word;
    word-break: break-all;
  }

  .dialog .title strong {
    font-weight: 400;
  }

  .dialog .info {
    padding: 0 22/2px;
    color: #888;
    font-size: 34/2px;
    line-height: 55/2px;
    text-align: center;
    word-wrap: break-word;
    word-break: break-all;
  }

  .div-bottom {
    display: -webkit-flex;
    display: flex;
  }

  .div-bottom a {
    display: block;
    -webkit-flex: 1;
    flex: 1;
    margin-top: 22/2px;
    height: 100/2px;
    color: #ff8400;
    font-size: 35/2px;
    line-height: 100/2px;
    text-align: center;
    border-top: 1px solid #d5d5d6;
  }

  .dialog a.cancel {
    color: #888;
    border-right: 1px solid #d5d5d6;
  }

  .dialog-enter-active, .dialog-leave-active {
    opacity: 1;
    transform: scale(1);
    transition: transform .4s, opacity .4s;
  }

  .dialog-enter, .dialog-leave {
    opacity: 1;
    transform: scale(1.2);
  }

</style>

<template>
  <div class="confirm">
    <transition name="dialog" mode="in-out" v-model="showValue">
      <div class="overlay" v-show="showValue">
        <div class="dialog" v-show="showValue">
          <p class="title">
            <strong>{{title}}</strong>
          </p>
          <p v-html="content" class="info"></p>
          <div class="div-bottom">
            <a href="javascript:;" class="cancel" @click="onHide(false)">{{negative}}</a>
            <a href="javascript:;" @click="onHide(true)">{{positive}}</a>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'confirm',
    data () {
      return {
        showValue: false
      }
    },
    props: {
      visible: {
        type: Boolean,
        twoWay: true
      },
      onPositive: {
        type: Function,
        default: function () {
        }
      },
      title: {
        type: String
      },
      content: {
        type: String
      },
      positive: {
        type: String,
        default: '确定'
      },
      negative: {
        type: String,
        default: '取消'
      }
    },
    methods: {
      onHide(isPositive) {
        if (isPositive && this.onPositive) {
          this.onPositive()
        }
        this.showValue = !this.showValue
      }
    },
    watch: {
      visible (val) {
        this.showValue = val
        if (val) {
          setTimeout(() => {
            this.$el.style.opacity = 1
          })
        } else {
          this.$el.style.opacity = 0
        }
      },
      showValue (val) {
        this.$emit('input', val)
      }
    }
  }
</script>
