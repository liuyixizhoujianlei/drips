<template>
  <div>
    <div class="popup-body"></div>
    <transition :name="currentTransition">
      <div class="sd-popup" :class="[position ? 'sd-popup-' + position : '']" v-show="currentVisible">
        <div class="popup-header">
          <span class="cancel" @click="$emit('close')">+</span>
          <h2 v-text="title" class="header-title"></h2>
          <span class="complete" @click="complete">完成</span>
        </div>
        <relation v-if="isShowRelation" :update="update"></relation>
        <picker :data='dates' v-model='date' @on-change='dateChange' v-if="isShowDatePicker"></picker>
        <slot></slot>
      </div>
    </transition>
  </div>
</template>
<script>
  import Relation from './components/relation/index.vue'
  import Picker from '../../picker'
  import Popup from './index.vue'

  let years = []
  for (let i = 1980; i <= 2030; i++) {
    years.push({
      name: i + '年',
      value: i + ''
    })
  }
  let days = []
  for (let j = 1; j < 32; j++) {
    days.push(j)
  }
  export default {
    name: 'popup',
    mixins: [Popup],
    props: {
      position: {
        type: String,
        default: 'bottom'
      },
      title: {
        type: String,
        default: ''
      },
      isShowDatePicker: {
        type: Boolean,
        default: false
      },
      isShowRelation: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        dates: [years, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], days],
        date: ['2017', '11', '4'],
        currentTransition: 'popup-slide-bottom',
        currentVisible: false
      }
    },
    components: {
      Relation,
      Picker
    },
    beforeMount () {
      this.currentTransition = `popup-slide-${this.position}`
    },
    mounted () {
      setTimeout(() => {
        this.currentVisible = true
      }, 100)
    },
    methods: {
      update (item) {
        this.$emit('relation', item)
        this.$emit('close')
      },
      dateChange (val) {
        this.date = val
      },
      complete () {
        if (this.isShowDatePicker) {
          this.$emit('date', this.date)
        }
        this.$emit('close')
      }
    }
  }
</script>
