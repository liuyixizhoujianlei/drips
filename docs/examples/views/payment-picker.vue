<template>
  <demo-section>
    <demo-block title="基础用法">
      <drip-payment-picker v-model="paymentAmount"></drip-payment-picker>
    </demo-block>
    <demo-block title="高级用法">
      <drip-payment-picker
        v-model="paymentAmount2"
        :amount-list="amountList"
        :show-other-amount="false"
      ></drip-payment-picker>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      paymentAmount: 20,
      paymentAmount2: 30,
      amountList: [5, 20, 30, 100, 200, 500, 1000]
    }
  }
}
</script>

<style lang="postcss">
.demo-payment-picker {
  .drip-payment-picker {
    padding: 0 15px;
  }
}
</style>
