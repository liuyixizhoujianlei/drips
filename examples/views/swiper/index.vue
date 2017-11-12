<template>
  <div>
    <div class="demo">
      <p class="desc">自动轮播 循环播放</p>
      <swiper
        :list="list"
        height="120px"
        @on-index-change="getVal"
        loop
        auto>
      </swiper>
    </div>
    <p>通过on-index-change获取当前index</p>
    <p>current index: {{demo1Val}}</p>
    <div class="line"></div>

    <div class="demo">
      <p class="desc">aspect-ratio根据当前宽度计算高度 提示点位于中下方  v-model绑定index</p>
      <swiper
        :list="list"
        loop
        :aspect-ratio="300/1100"
        v-model="demo2Val"
        dots-position="center-down">
      </swiper>
    </div>
    <p>current index: {{demo2Val}}</p>
    <div class="line"></div>

    <div class="demo">
      <p class="desc">swiper-item</p>
      <swiper
        :aspect-ratio="300/1100"
        dots-position="center-down">
        <swiper-item
          class="demo3"
          v-for="(item, index) in list"
          :key="index">
          <img :src="item.img">
        </swiper-item>
      </swiper>
    </div>
    <div class="line"></div>

    <div class="demo">
      <p class="desc">垂直滚动</p>
      <swiper
        height="30px"
        auto
        loop
        direction="vertical"
        :interval=2000
        class="text-scroll"
        :show-dots="false">
        <swiper-item
          v-for="(item, index) in list2"
          :key="index">
          <p v-text="item"></p>
        </swiper-item>
      </swiper>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperItem } from 'drips'
export default {
  data () {
    return {
      list: [{
        url: 'javascript:',
        img: 'http://alioss.sdbao.com/home/banner/banner.png',
        title: '111'
      }, {
        url: 'javascript:',
        img: 'http://alioss.sdbao.com/home/banner/banner2.png',
        title: '222'
      }, {
        url: 'javascript:',
        img: 'http://alioss.sdbao.com/home/banner/banner3.png',
        title: '333'
      }],
      list2: [
        '哈哈哈哈',
        '啦啦啦啦',
        '嘎嘎嘎嘎'
      ],
      demo1Val: 0,
      demo2Val: 1
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    getVal (val) {
      this.demo1Val = val
    }
  }
}
</script>
<style lang="less" scoped>
.demo {
  margin: 50px 0;
  .desc {
    width: 90%;
    color: #444444;
    margin: 10px auto
  }
}
.demo3 {
  img {
    width: 90%;
    margin: 0 auto;
    display: block;
  }
}
.text-scroll {
  border: 1px solid #ddd;
  border-left: none;
  border-right: none;
  p{
    font-size: 12px;
    text-align: center;
    line-height: 30px;
  }
}
.line {
  background: #000000;
  width: 100%;
  height: 1px;
}
.button {
  width: 80%;
  margin: 0 auto;
}
</style>

