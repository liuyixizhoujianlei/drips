<template>
  <demo-section>
    <demo-block title="单色圆环">
      <drip-loading type="circle" color="black" />
      <drip-loading type="circle" color="white" />
    </demo-block>

    <demo-block title="渐变色圆环">
      <drip-loading type="gradient-circle" color="black" />
      <drip-loading type="gradient-circle" color="white" />
    </demo-block>

    <demo-block title="Spinner">
      <drip-loading type="spinner" color="black" />
      <drip-loading type="spinner" color="white" />
    </demo-block>
  </demo-section>
</template>

<style lang="postcss">
.demo-loading {
  .drip-loading {
    display: inline-block;
    margin: 10px 0 10px 20px;
  }
}
</style>
