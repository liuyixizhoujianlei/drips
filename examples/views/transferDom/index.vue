<template>
  <div class="wrap1">
    <div class="title">
      如果当前组件所在位置某一父级使用了 ViewBox 组件或者直接使用了 Safari 的 overflowScrolling:touch，请引入指令 transfer-dom 以解决其带来的 z-index 失效问题。 
    </div>
    <br/>
    <div class="wrap3" v-transfer-dom>3333333333333333333333333</div>
    <div class="wrap2">222222222222222222222222</div>
  </div>
</template>
<script>
  import { TransferDom } from 'drips'
  export default {
    directives: {
      TransferDom
    }
  }
</script>
