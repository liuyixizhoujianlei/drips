<template>
  <demo-section>
    <demo-block title="基础用法">
      <drip-button @click="show1 = true">弹出 Dialog</drip-button>
      <drip-dialog v-model="show1" prevent-scroll>
        <div class="content">
          <div class="content-inner" v-html="content">
          </div>
        </div>
      </drip-dialog>
    </demo-block>

    <demo-block title="弹出位置">
      <drip-button @click="show2 = true">底部弹出</drip-button>
      <drip-dialog v-model="show2" position="bottom" prevent-scroll>
        弹层内容展示
      </drip-dialog>

      <drip-button @click="show3 = true">顶部弹出</drip-button>
      <drip-dialog v-model="show3" position="top" :overlay="false">
        弹层内容展示
      </drip-dialog>

      <drip-button @click="show4 = true">右侧弹出</drip-button>
      <drip-dialog v-model="show4" position="right" :overlay="false" prevent-scroll>
        <drip-button @click="show4 = false">关闭</drip-button>
      </drip-dialog>
    </demo-block>

    <div style="height: 2000px;"></div>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      show1: false,
      show2: false,
      show3: false,
      show4: false
    }
  },

  computed: {
    content() {
      return new Array(50).fill('.').map((_, i) => {
        return '弹层内容展示' + i
      }).join('<br>')
    }
  },

  watch: {
    show3(val) {
      if (val) {
        setTimeout(() => {
          this.show3 = false
        }, 2000)
      }
    }
  }
}
</script>

<style lang="postcss">
.demo-dialog {
  .drip-button {
    margin-left: 15px;
  }

  .content {
    height: 200px;
    overflow: auto;
  }

  .content-inner {
    height: 500px;
  }

  .drip-dialog {
    padding: 20px;
    width: 80%;
    box-sizing: border-box;

    &.drip-dialog--bottom {
      width: 100%;
      min-height: 200px;
    }

    &--top {
      color: #fff;
      width: 100%;
      border-radius: 0;
      line-height: 20px;
      background-color: rgba(0, 0, 0, 0.8);
    }

    &--left,
    &--right {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
