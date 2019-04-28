<template>
  <div id="app">
    <m-header></m-header>
    <tab-bar></tab-bar>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import MHeader from 'components/m-header/m-header'
import TabBar from 'components/tab/tab'
export default {
  name: 'app',
  components: {
    MHeader,
    TabBar
  }
}
</script>

<style lang="less" scoped>
@import '~common/style/variable.less';
#app {
  color: @color-theme;
}
</style>
