<template>
  <div v-if="isShow">
    <div class="weui-mask-loading"></div>
    <div class="loading">
      <svg viewBox="0 0 64 64">
        <g stroke-width="4" stroke-linecap="round">
          <line y1="17" y2="29" transform="translate(32,32) rotate(180)">
            <animate attributeName="stroke-opacity" dur="750ms" values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1"
                     repeatCount="indefinite"></animate>
          </line>
          <line y1="17" y2="29" transform="translate(32,32) rotate(210)">
            <animate attributeName="stroke-opacity" dur="750ms" values="0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0"
                     repeatCount="indefinite"></animate>
          </line>
          <line y1="17" y2="29" transform="translate(32,32) rotate(240)">
            <animate attributeName="stroke-opacity" dur="750ms" values=".1;0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1"
                     repeatCount="indefinite"></animate>
          </line>
          <line y1="17" y2="29" transform="translate(32,32) rotate(270)">
            <animate attributeName="stroke-opacity" dur="750ms" values=".15;.1;0;1;.85;.7;.65;.55;.45;.35;.25;.15"
                     repeatCount="indefinite"></animate>
          </line>
          <line y1="17" y2="29" transform="translate(32,32) rotate(300)">
            <animate attributeName="stroke-opacity" dur="750ms" values=".25;.15;.1;0;1;.85;.7;.65;.55;.45;.35;.25"
                     repeatCount="indefinite"></animate>
          </line>
          <line y1="17" y2="29" transform="translate(32,32) rotate(330)">
            <animate attributeName="stroke-opacity" dur="750ms" values=".35;.25;.15;.1;0;1;.85;.7;.65;.55;.45;.35"
                     repeatCount="indefinite"></animate>
          </line>
          <line y1="17" y2="29" transform="translate(32,32) rotate(0)">
            <animate attributeName="stroke-opacity" dur="750ms" values=".45;.35;.25;.15;.1;0;1;.85;.7;.65;.55;.45"
                     repeatCount="indefinite"></animate>
          </line>
          <line y1="17" y2="29" transform="translate(32,32) rotate(30)">
            <animate attributeName="stroke-opacity" dur="750ms" values=".55;.45;.35;.25;.15;.1;0;1;.85;.7;.65;.55"
                     repeatCount="indefinite"></animate>
          </line>
          <line y1="17" y2="29" transform="translate(32,32) rotate(60)">
            <animate attributeName="stroke-opacity" dur="750ms" values=".65;.55;.45;.35;.25;.15;.1;0;1;.85;.7;.65"
                     repeatCount="indefinite"></animate>
          </line>
          <line y1="17" y2="29" transform="translate(32,32) rotate(90)">
            <animate attributeName="stroke-opacity" dur="750ms" values=".7;.65;.55;.45;.35;.25;.15;.1;0;1;.85;.7"
                     repeatCount="indefinite"></animate>
          </line>
          <line y1="17" y2="29" transform="translate(32,32) rotate(120)">
            <animate attributeName="stroke-opacity" dur="750ms" values=".85;.7;.65;.55;.45;.35;.25;.15;.1;0;1;.85"
                     repeatCount="indefinite"></animate>
          </line>
          <line y1="17" y2="29" transform="translate(32,32) rotate(150)">
            <animate attributeName="stroke-opacity" dur="750ms" values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1"
                     repeatCount="indefinite"></animate>
          </line>
        </g>
      </svg>
      <div class="loading-tips">{{loadinTips}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        type: Boolean,
        default: false
      },
      loadinTips: {
        type: String,
        default: '加载中...'
      }
    },
    watch: {
      value: {
        handler: function (val) {
          this.isShow = val
        },
        immediate: true
      },
    },
    created () {
      if (typeof this.value !== 'undefined') {
        this.isShow = this.value
      }
    },
    data () {
      return {
        isShow: false
      }
    },
  }
</script>
