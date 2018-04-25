<template>
  <div class="drip-payment-picker">
    <ul class="drip-payment-picker__list">
      <li v-for="(amount, i) in amountList" :key="i" class="drip-payment-picker__list-item">
        <span class="payment-picker-cell" :class="{selected: selectedIndex === i}" @click="pick(i)">
          <em class="payment-amount">{{ amount }}</em>{{ unit }}
        </span>
      </li>
    </ul>
    <label class="drip-payment-picker__other-amount" v-if="showOtherAmount">
      <input
        class="other-amount-input" type="number"
        :value="otherAmount"
        :placeholder="placeholder"
        @focus="inputFocus"
        @blur="inputBlur"
        @change="inputChange"
      >
      <span class="amount-unit">{{ unit }}</span>
    </label>
  </div>
</template>

<script>
import { create } from '../utils'

export default create({
  name: 'drip-payment-picker',

  props: {
    value: {
      type: Number,
      default() {
        return 10
      }
    },
    placeholder: {
      type: String,
      default: '其他金额'
    },
    unit: {
      type: String,
      default: '元'
    },
    amountList: {
      type: Array,
      default() {
        return [10, 20, 50, 100, 500, 1000]
      }
    },
    showOtherAmount: {
      type: Boolean,
      default: true
    },
    defaultIndex: {
      type: Number,
      default: 0
    }
  },

  data() {
    return {
      otherAmount: '',
      inputing: false
    }
  },

  computed: {
    selectedIndex() {
      if (this.inputing) {
        return -1
      }

      return this.amountList.indexOf(this.value)
    }
  },

  watch: {
    value: {
      handler() {
        this.$nextTick(() => {
          if (!this.showOtherAmount) {
            if (this.selectedIndex === -1) {
              this.$emit('input', this.amountList[this.defaultIndex])
            }
            return
          }

          if (~this.selectedIndex) {
            this.otherAmount = ''
          } else {
            this.otherAmount = this.value
          }
        })
      },
      immediate: true
    }
  },

  methods: {
    pick(index) {
      this.$emit('input', this.amountList[index])
    },
    inputFocus() {
      this.inputing = true
    },
    inputBlur() {
      this.inputing = false
    },
    inputChange(ev) {
      const value = +ev.target.value

      if (value > 0) {
        this.$emit('input', value)
      } else {
        ev.target.value = this.otherAmount = ''
        this.$emit('input', this.amountList[this.defaultIndex])
      }
    }
  }
})
</script>
