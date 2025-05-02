# learn_vue
用于学习vue时，记录学习进展
测试github是否一定需要打开代理

day01 vscode连接github
1.插值表达式写法  ｛｛｝｝
2.指令
1.v-html
1.1 作用：动态设置元素 innerHTML
1.2 语法：v-html="表达式"

2.v-show
2.1 作用：控制元素显示隐藏
2.2 语法：v-show="表达式"   表达式值类型为boolean,值为true显示，false隐藏
2.3 底层原理：切换 css 的 display: none 来控制显示隐藏  实际在F12中查看元素，是存在的

3.v-if
3.1 作用：控制元素显示隐藏(条件渲染)
3.2 语法： v-if="表达式"   表达式值类型为boolean,值为true显示，false隐藏
3.3底层原理：根据 判断条件 控制元素的 创建 和 移除（条件渲染） 实际在F12中查看元素，值为false时，不存在

4.v-if v-else-if v-else
4.1 作用：根据条件进行判断渲染
4.2 语法：v-if="表达式" v-else-if="表达式" v-else 可以存在多个v-else-if,且需要与v-if一起使用

5.v-on
5.1 作用：注册事件 相当于添加监听和提供处理逻辑
5.2 语法：
    ① v-on:事件名="内联语句"  如果事件名为click,可以简写成 v-on:click=@click,至于其他事件名，是否可以简写，需要测试
    ② v-on:事件名="methods中的函数"

6.v-bind
6.1 作用：动态的设置html的标签属性  
6.2 语法：v-bind:属性名="表达式"  属性：src  title url ...   表达式：自定义的字段
6.3 注意： 简写形式  ：属性名="表达式"

7.v-for
7.1 作用：基于数据循环，多次渲染整个元素   数据可以是数组、对象、数字 。。。
7.2 语法： v-for="(item,index) in 数组" item 是每一项，index 为下标  不使用下标时可以简写 v-for="item in 数组"
7.3 v-for中的key
7.3.1 作用：给元素增加的唯一标识，便于VUE进行列表项的正确排序复用
7.3.2 语法： v-for="(item,index) in 数组" :key="index" 或 :key="item.id"
7.3.3 注意：
     ① key的值只能是字符串或数字类型
     ② key的值必须具有唯一性
     ③ 推荐使用id作为key(唯一)，不推荐使用index作为key（会变化，不对应）

8.v-model
8.1 作用：给表单元素使用，双向数据绑定  可以快速获取或设置表单元素内容
    ① 数据变化   视图自动更新
    ② 视图变化   数据自动更新
8.2 语法：v-model='变量'


day05
