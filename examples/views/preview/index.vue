<template>
  <div>
    <div class="list"> 
      <img v-for="(item, index) in imgList" :src="item.src" @click="$refs.preview.show(index)"/>
    </div>
    <preview :list="imgList" ref="preview" :options="option" @close="onClose">
    </preview>
  </div>
</template>
<script>
  import { Preview } from 'drips'
  export default {
    data() {
      return {
        imgList: [{
          src: 'http://cf.alioss.shuidichou.com/img/ck/20171020/049c020d-4d90-4d9d-856a-54db088f4caa'
        },
        {
          src: 'http://cf.alioss.shuidichou.com/img/ck/20171020/049c02d-4d90-4d9d-856a-54db088f4caa'
        }],
        option: {
          loop: false,
          preload: [1, 2],
          getThumbBoundsFn(index) {
            let thumbnail = document.querySelectorAll('.list img')[index]
            let pageYScroll = window.pageYOffset || document.documentElement.scrollTop
            let rect = thumbnail.getBoundingClientRect()
            return {x: rect.left, y: rect.top + pageYScroll, w: rect.width}
          }
        }
      }
    },
    components: {
      Preview
    },
    methods: {
      onClose() {
        console.log('close')
      }
    }
  }
</script>
<style lang="less">
  .list {
    img{
      width: 100px;
      margin-left: 10px
    }
  }
</style>