<template>
  <div class="11111">
    <div>{{title}}</div>
      <ul :class="disabled ? 'disabled' : ''">
        <li v-for="item in options" :key="item.key" :class="{'checked':item.val}" @click="onCheck(item)">
          {{item.key}}
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'CheckBox',
  props: {
    title: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      default: []
    },
    max: {
      type: Number,
      default: undefined
    },
    min: {
      type: Number,
      default: undefined
    },
    disabled: {
      type: Boolean,
      default: false
    },
    onChecked :{
      type: Function,
      default: function(selectitem){
        console.log(selectitem,'默认父级传来的方法')
      }
    }
  },
  data () {
    return {
    }
  },
  methods: {
    onCheck(selectitem) {
      if(this.disabled){
        console.log('不可选状态')
        return
      }
      if(this.max && this.max === 1 && this.getSelectNum()>=this.max && !selectitem.val){
        this.setOption(false)
        console.log('不可超过设置的max值，max=1时，单选使用')
        // return
      }
      if(this.max && this.max > 1 && this.getSelectNum()>=this.max && !selectitem.val){
        console.log('不可超过设置的max值，max>1时')
        return
      }
      if(this.min && this.getSelectNum()<=this.min && selectitem.val){
        console.log('至少选择min项')
        return
      }
      selectitem.val = !selectitem.val
      this.onChecked(selectitem)
    },
    getSelectNum() {
      let num = this.options.filter((item)=>{
        return item.val
      }).length
      return num
    },
    setOption(bok){
      this.options.forEach((item)=>{
        item.val = bok
      })

    }
  }
}
</script>
<style lang="less">
  .checked{
    background-color: red;
  }
  .disabled{
    background-color: #ccc;
    color: #fff;
  }
</style>