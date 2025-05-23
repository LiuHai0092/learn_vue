1.功能化开发 & 脚手架 vue cli
1.1 使用步骤
① 全局安装 (一次) ：yarn global add @vue/cli 或 npm i @vue/cli -g
② 查看 Vue 版本：vue --version
③ 创建项目架子：vue create project-name（项目名-不能用中文）
④ 启动项目： yarn serve 或 npm run serve（serve找package.json中scripts的配置信息）

1.2 脚手架目录文件介绍
VUE-DEMO
│─node_modules 第三包文件夹
├─public 放html文件的地方
│ ├─favicon.ico 网站图标
│ └─index.html index.html 模板文件 ③
├─src 源代码目录 → 以后写代码的文件夹
│ └─assets 静态资源目录 → 存放图片、字体等
│ └─components 组件目录 → 存放通用组件
│ └─App.vue App根组件 → 项目运行看到的内容就在这里编写 ②
│ └─main.js 入口文件 → 打包或运行，第一个执行的文件 ①
└─.gitignore git忽视文件
└─babel.config.js babel配置文件
└─jsconfig.json js配置文件
└─package.json 项目配置文件 → 包含项目名、版本号、scripts、依赖包等
└─README.md 项目说明文档
└─vue.config.js vue-cli配置文件
└─yarn.lock yarn锁文件，由yarn自动生成的，锁定安装版本
1.2.1 最主要文件 main.js App.vue index.html

1.3 项目运行流程
yarn serve 或 npm run serve  ——> 加载 main.js -> 导入 App.vue -> 渲染 index.html
vscode中运行 npm install npm run serve
1.3.1 初始脚手架项目 main.js 核心代码
① 导入 Vue 核心包   import Vue from 'vue'
② 导入 App.vue 根组件  import App from './App.vue'
③ Vue实例化，提供render方法 -> 基于App.vue 创建结构渲染index.html
new Vue({
  render: h => h(App),
  //完整写法
  //render:(createElement)=>{
  //基于App创建元素结构
  // return createElement(App)
  //  }
}).$mount('#app')

1.4 注册局部组件
① 引入组件 import HmMain from './components/HmMain.vue'
② 注册组件 components: {
    // '组件名': 组件对象
    HmMain: HmMain,
    //简写
    HmMain,
  }

1.5 注册全局组件
main.js 中 语法：Vue.component(组件名，组件对象)