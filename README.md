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


day05
