<template>
  <div id="app">
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
</script>

<style lang="less">
  @import '../src/styles/reset.less';
  @import '../src/styles/index.less';
  @import './styles.less';
  @import '../src/icomoon/style.css';
</style>
