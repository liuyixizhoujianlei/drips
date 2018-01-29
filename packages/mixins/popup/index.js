import manager from './manager'
import context from './context'
import scrollUtils from '../../utils/scroll'
import { on, off } from '../../utils/event'

export default {
  props: {
    // whether to show popup
    value: Boolean,
    // whether to show overlay
    overlay: Boolean,
    // overlay custom style
    overlayStyle: Object,
    // overlay custom class name
    overlayClass: String,
    // whether to close popup when click overlay
    closeOnClickOverlay: Boolean,
    // z-index
    zIndex: [String, Number],
    // prevent touchmove scroll
    preventScroll: Boolean,
    // prevent body scroll
    lockOnScroll: {
      type: Boolean,
      default: true
    }
  },

  watch: {
    value(val) {
      this[val ? 'open' : 'close']()
    }
  },

  beforeMount() {
    this._popupId = 'popup-' + context.plusKey('idSeed')
    this._opened = false
    this._pos = {
      x: 0,
      y: 0
    }
  },

  methods: {
    handleTouchStart(e) {
      this.el = scrollUtils.getScrollEventTarget(e.target, this.$el)
      this._pos = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      }
    },

    watchTouchMove(e) {
      const { _pos } = this
      const dx = e.touches[0].clientX - _pos.x
      const dy = e.touches[0].clientY - _pos.y
      const direction = dy > 0 ? '10' : '01'
      const { scrollHeight, offsetHeight, scrollTop } = this.el
      const isVertical = Math.abs(dx) < Math.abs(dy)

      let status = '11'

      if (scrollTop === 0) {
        // '00' -> 无滚动 || '01' -> 有滚动，到顶 || '10' -> 有滚动，到底
        status = offsetHeight >= scrollHeight ? '00' : '01'
      } else if (scrollTop + offsetHeight >= scrollHeight) {
        status = '10'
      }

      if (
        status !== '11' &&
        isVertical &&
        !(parseInt(status, 2) & parseInt(direction, 2))
      ) {
        console.log(e.defaultPrevented)
        e.preventDefault()
        e.stopPropagation()
        console.log(e.defaultPrevented)
      }
    },

    open() {
      if (this._opened || this.$isServer) {
        return
      }

      this.$emit('input', true)

      // 如果属性中传入了`zIndex`，则覆盖`context`中对应的`zIndex`
      if (this.zIndex !== undefined) {
        context.zIndex = this.zIndex
      }

      if (this.overlay) {
        manager.openModal(this, {
          id: this._popupId,
          dom: this.$el,
          zIndex: context.plusKey('zIndex'),
          className: this.overlayClass,
          customStyle: this.overlayStyle
        })

        if (this.lockOnScroll) {
          document.body.classList.add('drip-overflow-hidden')
        }
      }

      this.$el.style.zIndex = context.plusKey('zIndex')
      this._opened = true

      if (this.preventScroll) {
        on(document, 'touchstart', this.handleTouchStart)
        on(document, 'touchmove', this.watchTouchMove)
      }
    },

    close() {
      if (!this._opened || this.$isServer) {
        return
      }

      this.$emit('input', false)
      this._opened = false
      this.doAfterClose()
    },

    doAfterClose() {
      manager.closeModal(this._popupId)

      if (this.lockOnScroll) {
        document.body.classList.remove('drip-overflow-hidden')
      }

      if (this.preventScroll) {
        off(document, 'touchstart', this.handleTouchStart)
        off(document, 'touchmove', this.watchTouchMove)
      }
    }
  },

  beforeDestroy() {
    this.doAfterClose()
  }
}
