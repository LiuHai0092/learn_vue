//文件核心作用：导入App.vue,基于App.vue创建结构渲染index.html
//1. 导入 Vue 核心包
import Vue from 'vue'

//2. 导入 App.vue 根组件
import App from './App.vue'

//todo 引入样式
import './styles/base.css' // css 样式重置
import './styles/common.css' // 公共全局样式
import './assets/iconfont/iconfont.css' // 字体图标的样式

// 快捷链接 和 版权底部 注册为全局组件
import XtxShortCut from './components/XtxShortCut.vue'
import XtxFooter from './components/XtxFooter.vue'
//todo 注册全局组件
//语法：Vue.component(组件名，组件对象)
Vue.component('XtxShortCut',XtxShortCut)
Vue.component('XtxFooter',XtxFooter)



// 热门品牌 和 新鲜好物 可以提取组件进行全局注册
import BaseBrandItem from './components/BaseBrandItem.vue'
import BaseGoodsItem from './components/BaseGoodsItem.vue'
//todo 注册全局组件
//语法：Vue.component(组件名，组件对象)
Vue.component('BaseBrandItem',BaseBrandItem)
Vue.component('BaseGoodsItem',BaseGoodsItem)
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
