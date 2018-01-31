<template>
  <transition name="drip-confirm-bounce">
    <div class="drip-confirm" v-show="value">
      <div class="drip-confirm__header" v-if="title" v-text="title" />
      <div class="drip-confirm__content drip-hairline">
        <slot>
          <div class="drip-confirm__message" v-if="message" :class="{ 'drip-confirm__message--withtitle': title }" v-html="message" />
        </slot>
      </div>
      <div
        class="drip-confirm__footer"
        :class="{
          'is-twobtn': showCancelButton && showConfirmButton,
          'is-reverse': reverseButton
        }"
      >
        <drip-button
          flat
          class="drip-confirm__cancel"
          v-show="showCancelButton"
          @click="handleAction('cancel')"
        >
          {{ cancelButtonText || '取消' }}
        </drip-button>
        <drip-button
          flat
          class="drip-confirm__confirm"
          :class="hairlineClass"
          v-show="showConfirmButton"
          @click="handleAction('confirm')"
        >
          {{ confirmButtonText || '确认' }}
        </drip-button>
      </div>
    </div>
  </transition>
</template>

<script>
import { create } from '../utils'
import DripButton from '../button'
import Popup from '../mixins/popup'

export default create({
  name: 'drip-confirm',

  components: {
    DripButton
  },

  mixins: [Popup],

  props: {
    title: String,
    message: String,
    callback: Function,
    confirmButtonText: String,
    cancelButtonText: String,
    showCancelButton: Boolean,
    showConfirmButton: {
      type: Boolean,
      default: true
    },
    reverseButton: Boolean,
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: false
    },
    lockOnScroll: {
      type: Boolean,
      default: true
    }
  },

  computed: {
    hairlineClass() {
      if (this.showCancelButton && this.showConfirmButton) {
        return this.reverseButton ? 'drip-hairline--right' : 'drip-hairline--left'
      }
    }
  },

  mounted() {
    this.handleState = () => {
      this.close()
    }
    window.addEventListener('popstate', this.handleState)
  },

  beforeDestroy() {
    window.removeEventListener('popstate', this.handleState)
  },

  methods: {
    handleAction(action) {
      this.$emit('input', false)
      this.$emit(action)
      this.callback && this.callback(action)
    }
  }
})
</script>
