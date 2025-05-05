<template>
  <div class="App">
    <div class="box" @click="fn">我是盒子</div>
  </div>
</template>

<script>

export default {
  created(){
    console.log('我是created')
  },
  methods:{
    fn(){
      alert('你好')
    }
  }
}
</script>

<style lang="less">
.App {
  width: 400px;
  height: 400px;
  background-color: pink;

  .box {
    width: 100px;
    height: 100px;
    background-color: rgb(231, 10, 10);
  }
}
</style>
