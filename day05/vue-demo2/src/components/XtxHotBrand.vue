<template>
  <!-- 热门品牌 -->
  <div class="hot">
    
  </div>
</template>

<script>
export default {
  name: 'XtxHotBrand',
}
</script>

<style>
.hot {
  margin-top: 60px;
  padding-bottom: 40px;
  overflow: hidden;
  background-color: #F5F5F5;
}
.hot .title {
  position: relative;
  margin-bottom: 40px;
}
.hot .button {
  display: flex;
  position: absolute;
  right: 0;
  top: 47px;
}
.hot .button a {
  display: block;
  width: 20px;
  height: 20px;
  background-color: #ddd;
  text-align: center;
  line-height: 20px;
  color: #fff;
}
.hot .button a:nth-child(2) {
  margin-left: 12px;
  background-color: #00BE9A;
}
.hot .bd ul {
  display: flex;
  justify-content: space-between;
}
.hot .bd li {
  width: 244px;
  height: 306px;
}
</style>
