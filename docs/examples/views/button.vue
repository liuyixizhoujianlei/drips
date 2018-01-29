<template>
  <demo-section>
    <demo-block title="按钮类型">
      <drip-button type="default">默认按钮</drip-button>
      <drip-button type="primary">主要按钮</drip-button>
      <drip-button type="plain">朴素按钮</drip-button>
    </demo-block>

    <demo-block title="禁用状态">
      <drip-button disabled>默认按钮</drip-button>
      <drip-button type="primary" disabled>主要按钮</drip-button>
    </demo-block>

    <demo-block title="加载状态">
      <drip-button loading>加载中</drip-button>
    </demo-block>

    <demo-block title="平角按钮">
      <drip-row>
        <drip-col span="12">
          <drip-button flat>平角默认按钮</drip-button>
        </drip-col>
        <drip-col span="12">
          <drip-button type="primary" flat>平角主要按钮</drip-button>
        </drip-col>
      </drip-row>
    </demo-block>

    <demo-block title="图标按钮">
      <drip-button type="default" icon="clock">时钟</drip-button>
      <drip-button type="primary" icon="close">关闭</drip-button>
    </demo-block>

    <demo-block title="平角按钮">
      <drip-button tag="a" href="https://www.shuidihuzhu.com/" target="_blank">链接按钮</drip-button>
    </demo-block>

  </demo-section>
</template>

<style lang="postcss">
.demo-button {
  .drip-demo-block {
    padding: 0 15px;
  }

  .is-normal {
    margin: 0 10px 10px 0;
    vertical-align: top;
  }

  .drip-demo-block__title {
    padding-left: 0;
  }
}
</style>
