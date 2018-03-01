<template>
  <div class="side-nav">
    <h1 class="sd-ui-title">
      <img src="https://alioss.shuidichou.com/imgs/common/hz-favicon.ico" >
      <span>Drips</span>
    </h1>
    <h2 class="sd-ui-desc">水滴移动端 Vue 组件库</h2>
    <div class="mobile-navs">
      <div class="mobile-nav-item" v-for="(item, index) in navList" v-if="item.showInMobile" :key="index">
        <mobile-nav v-for="(group, index) in item.groups" :group="group" :base="base" :nav-key="index" :key="index" />
      </div>
    </div>
  </div>
</template>

<script>
import docConfig from '../doc.config'
import MobileNav from './MobileNav'

const lang = 'zh-CN'

export default {
  data() {
    return {
      docConfig
    }
  },

  components: {
    MobileNav
  },

  computed: {
    base() {
      return `${lang}/component`
    },

    navList() {
      return this.docConfig[lang].nav || []
    }
  }
}
</script>

<style lang="postcss">
.side-nav {
  position: relative;
  padding: 60px 15px 20px;
  width: 100%;
  box-sizing: border-box;
  z-index: 1;

  .sd-ui-title,
  .sd-ui-desc {
    text-align: center;
    font-weight: normal;
    user-select: none;
  }

  .sd-ui-title {
    margin: 0 0 15px;

    img,
    span {
      display: inline-block;
      vertical-align: middle;
    }

    img {
      width: 36px;
    }

    span {
      font-size: 40px;
      margin-left: 15px;
      font-family: "Dosis", "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
    }
  }

  .sd-ui-desc {
    margin: 0 0 60px;
    font-size: 14px;
    color: #455a64;
  }
}
</style>
