<template>
  <div class="warp">
    <check-box
      :title="checkboxTitle"
      :label-position="labelPosition"
      v-model="checkBoxVales"
    ></check-box>
    <button @click="showCheckBoxVales">点击显示checkbox的值</button>
  </div>
</template>
<script>
import { CheckBox } from 'drips'

export default {
  data() {
    return {
      checkboxTitle: '您想要的title',
      labelPosition: 'left',
      checkBoxVales: [{key: 'pingguo', val: true}, {key: 'li', val: false}, {key: 'xiangjiao', val: true}]
    }
  },
  components: {
    CheckBox
  },
  methods: {
    showCheckBoxVales() {
      console.log(this.checkBoxVales)
    }
  }
}
</script>
<style lang="less">
</style>