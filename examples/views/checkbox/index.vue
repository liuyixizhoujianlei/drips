<!--
 * @description  checkbox组件  改前请务必联系
 * @author 魏冰冰
 * @prarms 
 *           name               type            default       description
 *           title              String            -             标题
 *           required           Boolean         false           是否为必填
 *           options            Array             []            选项列表 [{key: '苹果', val: true},...]
 *           max                Number          undefined       1时为单选      
 *           min                Number            1
 *           disabled           Boolean          false          是否禁用
 -->
<template>
  <div class="warp">
    <check-box
      title="您想要的title"
      :options="checkBoxOptions"
      :max="4"
      :min="1"
      :disabled="false"
    ></check-box>
    <button @click="showCheckBoxVales">点击显示checkbox的值</button>
  </div>
</template>
<script>
import { CheckBox } from 'drips'

export default {
  data() {
    return {
      checkBoxOptions: [
        {key: '苹果', val: true},
        {key: '鸭梨', val: true},
        {key: '文兵', val: true},
        {key: '书红', val: true},
        {key: 'abc', val: true}
      ]
    }
  },
  components: {
    CheckBox
  },
  methods: {
    showCheckBoxVales() {
      console.log(this.checkBoxOptions)
    }
  }
}
</script>
<style lang="less">
</style>