<template>
  <demo-section>
    <demo-block title="基础用法">
      <drip-row>
        <drip-col span="8">span: 8</drip-col>
        <drip-col span="8">span: 8</drip-col>
        <drip-col span="8">span: 8</drip-col>
      </drip-row>

      <drip-row>
        <drip-col span="4">span: 4</drip-col>
        <drip-col span="8" offset="4">offset: 4, span: 8</drip-col>
      </drip-row>

      <drip-row>
        <drip-col offset="12" span="12">offset: 12, span: 12</drip-col>
      </drip-row>
    </demo-block>

    <demo-block title="在列元素之间增加间距">
      <drip-row gutter="20">
        <drip-col span="8">span: 8</drip-col>
        <drip-col span="8">span: 8</drip-col>
        <drip-col span="8">span: 8</drip-col>
      </drip-row>
    </demo-block>
  </demo-section>
</template>

<style lang="postcss">
.demo-layout {
  .drip-demo-block {
    padding: 0 15px;
  }

  .drip-col {
    color: #fff;
    font-size: 13px;
    line-height: 30px;
    text-align: center;
    margin-bottom: 10px;
    background-clip: content-box;

    &:nth-child(odd) {
      background-color: #39a9ed;
    }

    &:nth-child(even) {
      background-color: #66c6f2;
    }
  }
}
</style>
