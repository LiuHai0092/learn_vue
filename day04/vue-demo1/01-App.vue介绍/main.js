//文件核心作用：导入App.vue,基于App.vue创建结构渲染index.html
//1. 导入 Vue 核心包
import Vue from 'vue'

//2. 导入 App.vue 根组件
import App from './App.vue'

// 提示：当前处于什么环境(生产环境 / 开发环境)
Vue.config.productionTip = false

//3. Vue实例化，提供render方法 -> 基于App.vue 创建结构渲染index.html
new Vue({
  render: h => h(App),
  //完整写法
  //render:(createElement)=>{
  //基于App创建元素结构
  // return createElement(App)
  //  }
}).$mount('#app')
