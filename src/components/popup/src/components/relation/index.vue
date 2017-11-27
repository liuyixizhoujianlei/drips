<template>
  <div class="content-wrap">
    <div class="content">
      <div class="tips">
        <span>该会员是我的：</span>
      </div>
      <div class="item" v-for="(item, key) of list" @click="update(item);selectKey = key" :key="key" :class="{'selected': key == selectKey}">
        {{item.relName}}
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      update: {
        type: Function
      }
    },
    data () {
      return {
        list: [
          { relValue: 'SELF', relName: '本人' },
          { relValue: 'CHILDREN', relName: '子女' },
          { relValue: 'COUPON', relName: '配偶' },
          { relValue: 'GRANDCHILD', relName: '(外)孙子女' },
          { relValue: 'GRANDPARENT', relName: '(外)祖父母' },
          { relValue: 'PARENT', relName: '双方父母' },
          { relValue: 'SIBLING', relName: '兄弟姐妹' },
          { relValue: 'OTHER', relName: '其他' }
        ],
        selectKey: 0
      }
    }
  }
</script>
<style lang="less" scoped>
.content {
  margin: 48/2px 20/2px 0 48/2px;
}

.content .tips {
  font-size: 24/2px;
  color: #777;
  line-height: 38/2px;
  padding-right: 18/2px;
  margin-bottom: 48/2px;
  span {
    color: #333;
    font-size: 28/2px;
  }
}

.content .item {
  display: inline-block;
  width: 30%;
  height: 120/2px;
  line-height: 120/2px;
  font-size: 30/2px;
  background: #eeeeee;
  margin: 0 3% 3% 0;
  text-align: center;
}

.content .selected {
  background: #ffc850;
  color: #fff;
}
</style>
