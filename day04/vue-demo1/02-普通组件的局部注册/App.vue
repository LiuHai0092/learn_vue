<template>
  <div class="App">
    <!-- 头部组件 -->
    <HmHeader></HmHeader>
    <!-- 主体组件 -->
    <HmMain></HmMain>
    <!-- 底部组件 -->
    <HmFooter></HmFooter>

    <!-- 如果 HmFooter + tab 出不来 → 需要配置 vscode
     设置中搜索 trigger on tab → 勾上
-->
  </div>

</template>

<script>
//1.引入组件
import HmMain from './components/HmMain.vue'
import HmHeader from './components/HmHeader.vue'
import HmFooter from './components/HmFooter.vue'
export default {
  //2.注册组件
  components: {
    // '组件名': 组件对象
    HmMain: HmMain,
    //简写
    HmHeader,
    HmFooter
  }
}
</script>

<style lang="less">
.App {
  width: 600px;
  height: 700px;
  background-color: #87ceeb;
  margin: 0 auto;
  padding: 20px;
}
</style>
