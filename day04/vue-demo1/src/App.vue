<template>
  <div class="App">
    <!-- 快捷链接 -->
    <XtxShortCut></XtxShortCut>
    <!-- 头部导航 -->
    <XtxHeaderNav></XtxHeaderNav>
    <!-- 轮播区域 -->
    <XtxBanner></XtxBanner>
    <!-- 新鲜好物 -->
    <XtxNewGoods></XtxNewGoods>
    <!-- 热门品牌 -->
    <XtxHotBrand></XtxHotBrand>
    <!-- 最新专题 -->
    <XtxTopic></XtxTopic>
    <!-- 版权底部 -->
    <XtxFooter></XtxFooter>

    <!-- 如果 HmFooter + tab 出不来 → 需要配置 vscode
     设置中搜索 trigger on tab → 勾上
-->
  </div>

</template>

<script>
//1.引入组件
import XtxHeaderNav from './components/XtxHeaderNav.vue';
import XtxBanner from './components/XtxBanner.vue';
import XtxNewGoods from './components/XtxNewGoods.vue';
import XtxHotBrand from './components/XtxHotBrand.vue';
import XtxTopic from './components/XtxTopic.vue';


export default {
  //2.注册组件
  components: {
    XtxHeaderNav,
    XtxBanner,
    XtxNewGoods,
    XtxHotBrand,
    XtxTopic,

  }
}
</script>

<style lang="less">

</style>
