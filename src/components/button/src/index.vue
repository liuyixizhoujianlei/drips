<template>
  <!-- 水滴橙主题 -->
  <section v-if="isYellow">
    <!-- 大型按钮 -->
    <div v-if="isLarge" v-bind:class="[isYellow ? 'sd-yellow large' : 'sd-white large']" @click="clickEvent">{{buttonText}}</div>
    <!-- 普通按钮 -->
    <div v-if="isNormal" v-bind:class="[isYellow ? 'sd-yellow normal' : 'sd-white normal']" @click="clickEvent">{{buttonText}}</div>
    <!-- 小型按钮 -->
    <div v-if="isSmall" v-bind:class="[isYellow ? 'sd-yellow small' : 'sd-white small']" @click="clickEvent">{{buttonText}}</div>
  </section>
  <!-- 水滴蓝主题 -->
  <section v-else>
    <!-- 大型按钮 -->
    <div v-if="isLarge" v-bind:class="[isBlue ? 'sd-blue large' : 'sd-white large']" @click="clickEvent">{{buttonText}}</div>
    <!-- 普通按钮 -->
    <div v-if="isNormal" v-bind:class="[isBlue ? 'sd-blue normal' : 'sd-white normal']" @click="clickEvent">{{buttonText}}</div>
    <!-- 小型按钮 -->
    <div v-if="isSmall" v-bind:class="[isBlue ? 'sd-blue small' : 'sd-white small']" @click="clickEvent">{{buttonText}}</div>
  </section>
</template>

<script>
export default {
  name: 'sd-button',
  props: {
    // 文字
    buttonText: {
      type: String
    },
    // 点击事件
    clickEvent: {
      type: Function
    },
    // 主题背景色 (yellow, blue)
    type: {
      type: String,
      default: ''
    },
    // 尺寸（large, normal, small）
    size: {
      type: String,
      default: 'normal'
    }
  },
  data () {
    return {
      isYellow: false,
      isBlue: false,
      isLarge: false,
      isNormal: false,
      isSmall: false
    }
  },
  mounted () {
    // 主题色
    switch (this.type) {
      case 'yellow':
        this.isYellow = true
        break
      case 'blue':
        this.isBlue = true
        break
    }

    // 尺寸
    switch(this.size) {
      case 'large':
        this.isLarge = true
        break
      case 'normal':
        this.isNormal = true
        break
      case 'small':
        this.isSmall = true
        break
    }
  }
}
</script>