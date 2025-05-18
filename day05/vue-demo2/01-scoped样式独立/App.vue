<template>
  <div class="App">
    <BaseOne></BaseOne>
    <BaseTwo></BaseTwo>
  </div>
</template>

<script>
//1.引入组件
import BaseOne from "./components/BaseOne.vue";
import BaseTwo from "./components/BaseTwo.vue";

export default {
  //2.注册组件
  components: {
    BaseOne,
    BaseTwo,
  },
};
</script>

<style lang="less"></style>
