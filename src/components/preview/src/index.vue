<template>
  <div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="pswp__bg"></div>
    <div class="pswp__scroll-wrap">
      <div class="pswp__container">
        <div class="pswp__item"></div>
        <div class="pswp__item"></div>
        <div class="pswp__item"></div>
      </div>
      <div class="pswp__ui pswp__ui--hidden">
        <div class="pswp__top-bar">
          <div class="pswp__counter"></div>
          <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>
          <div class="pswp__preloader">
            <div class="pswp__preloader__icn">
              <div class="pswp__preloader__cut">
                <div class="pswp__preloader__donut"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
          <div class="pswp__share-tooltip"></div>
        </div>
        <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>
        <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>
        <div class="pswp__caption">
          <div class="pswp__caption__center"></div>
        </div>
      </div>
    </div>
    <slot></slot>
    <ul class="slider-contr-wrap pswp__custom__view">
      <li v-for="(item, index) in count" :class="{'active': index === currentIndex}"></li>
      <li class="hard-icon"></li>
    </ul>
  </div>
</template>

<script>
import PhotoSwipe from 'sd-photoswipe/dist/photoswipe.js'
import UI from 'sd-photoswipe/dist/photoswipe-ui-default'
export default {
  name: 'preview',
  data() {
    return {
      currentIndex: 0,
      count: 1,
      afterIndex: 0
    }
  },
  computed: {
    imgs () {
      return this.list.map(one => {
        if (!one.msrc) {
          one.msrc = one.src
        }
        if (typeof one.w === 'undefined') {
          one.w = 0
          one.h = 0
        }
        return one
      })
    }
  },
  methods: {
    init (index) {
      const self = this
      const showItem = this.imgs[index]

      if (!showItem.w || !showItem.h || showItem.w < 5 || showItem.h < 5) {
        const img = new window.Image()
        img.onload = function () {
          showItem.w = this.width
          showItem.h = this.height
          self._init(index)
        }
        img.src = showItem.src
      } else {
        this._init(index)
      }
    },

    _init (index) {
      const self = this
      let options = Object.assign({
        history: false,
        shareEl: false,
        tapToClose: true,
        index: index
      }, this.options)

      this.photoswipe = new PhotoSwipe(this.$el, UI, this.imgs, options)
      this.photoswipe.listen('gettingData', function (index, item) {
        if (!item.w || !item.h || item.w < 1 || item.h < 1) {
          const img = new window.Image()
          img.onload = function () {
            item.w = this.width
            item.h = this.height
            self.photoswipe.updateSize(true)
          }
          img.src = item.src
        }
      })

      this.photoswipe.init()
      this.photoswipe.listen('close', () => {
        this.$emit('close')
      })

      this.photoswipe.listen('afterChange', (index) => {
        this.currentIndex = this.photoswipe.getCurrentIndex()
        this.$emit('change')
      })

      this.photoswipe.listen('mainScrollAnimComplete', (directionFlag) => {
        if (directionFlag && (this.afterIndex + 1) === this.count) {
          this.$emit('previewOver')
        }

        this.afterIndex = this.photoswipe.getCurrentIndex()
      })

      this.afterIndex = this.currentIndex = this.photoswipe.getCurrentIndex()
      this.count = this.photoswipe.items.length
    },
    show (index) {
      this.init(index)
    },
    close () {
      this.photoswipe.close()
    },
    currentImgIndex() {
      return this.photoswipe.getCurrentIndex()
    },
    goTo (index) {
      this.photoswipe.goTo(index)
    },
    prev () {
      this.photoswipe.prev()
    },
    next () {
      this.photoswipe.next()
    }
  },
  props: {
    list: {
      type: Array,
      required: true
    },
    index: {
      type: Number,
      default: 0
    },
    options: {
      type: Object,
      default: {}
    }
  }
}
</script>

<style lang="less">
  @import '~sd-photoswipe/dist/photoswipe.css';
  @import '~sd-photoswipe/dist/default-skin/default-skin.css';
  .pswp{
    z-index: 400;
  }
  .pswp__container, .pswp__item, .pswp__scroll-wrap {
    background: url('./imgs/bg.jpg') 0 0 no-repeat;
    background-size: 100% 100%;
  }
  .pswp__top-bar {
    background: none;
  }
  .pswp__counter, .pswp__button--arrow--left, .pswp__button--arrow--right{
    display: none;
  }
  .pswp__button {
    background: url('./imgs/close.png') 0 0 no-repeat !important;
    width:40/2px;
    height:40/2px;
    top: 32/2px;
    right: 32/2px;
    background-size: 100% !important;
    z-index: 1;
  }
  .pswp__preloader{
    display: none;
  }
  .slider-contr-wrap {
    position: absolute;
    background-image:linear-gradient(to top, rgba(0,0,0,0.23) 0%,rgba(0,0,0,0) 90%);
    padding-bottom: 34/2px;
    padding-top: 20px;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
    li{
      display: inline-block;
      background:rgba(255,255,255,0.50);
      width:12/2px;
      height:12/2px;
      border-radius:100%;
      margin: 0 12/2px;
    }
    .active {
      background:#ffffff;
    }
    .hard-icon{
      background: url('./imgs/hard-icon.png') 0 0 no-repeat;
      background-size: 100%;
      width: 16/2px;
      height: 14/2px;
      border-radius: 0;
      vertical-align: -1px;
    }
  }
</style>