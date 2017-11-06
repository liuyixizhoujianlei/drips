<template>
  <div class="wrap">
    <sd-button :type="type" :clickEvent="showPopup" :size="size" buttonText="点我"></sd-button>
    <div class="item" @click="relationVisible = true">
      <label>请选择关系</label>
      <input v-model="relName" readonly/>
    </div>
    <div class="item" @click="datePickerVisible = true">
      <label>请选择出生日期</label>
      <span v-if="birthday.length!==0">{{birthday}}</span>
    </div>
    <popup title="测试" @close="popupVisible = false" v-if="popupVisible" position="center">
      <div class="test">测试</div>
    </popup>
    <popup title="选择关系" @relation="relation" @close="relationVisible = false" v-if="relationVisible" :isShowRelation="true" position="top">
    </popup>
    <popup title="选择出生日期" @close="datePickerVisible = false" v-if="datePickerVisible" @date="date" :isShowDatePicker="true">
    </popup>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        popupVisible: false,
        relationVisible: false,
        size: 'normal',
        type: 'yellow',
        relName: '',
        datePickerVisible: false,
        birthday: []
      }
    },
    methods: {
      relation (data) {
        this.relName = data.relName
      },
      showPopup () {
        this.popupVisible = true
      },
      date (date) {
        this.birthday = date
      }
    }
  }
</script>
<style scoped lang="less">
  .test {
    margin: 20px auto;
    width: 80%;
    font-size: 25px;
    text-align: center;
  }
  .item {
    border-bottom: 1px solid #ccc;
    padding: 10px 5px;
  }
</style>
