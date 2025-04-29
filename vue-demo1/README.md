在创建vue项目时，出现 idealTree:xxx: sill idealTree buildDeps 卡住不动,解决方法
1.--在cmd（DOS页面）界面执行下述指令，可查看 .npmrc 文件位置
npm config list
2.清除缓存，使用 npm cache verify
3.修改镜像： npm config set registry https://registry.npmmirror.com
4.查看镜像是否修改成功： npm config get registry
5.运行 npm 安装 npm install


# vue-demo1

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
