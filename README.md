# pc 搭建

## 安装依赖

```
npm install XXXXXX --save-dev
or
yarn add XXXXXX
// 已添加
XXXXXXX === axios cross-env
// 待定
font-awesome i18n
```

## 目录结构

```
├── mock                     # 模拟数据 json
├── public
│   └── xxx.ico              # ico
|   └── index.html           # Vue 入口模板
├── src
│   ├── assets               # 本地静态资源
│   ├── components           # 业务通用组件
│   ├── mixins               # 特殊模块抽取公共属性和方法
│   ├── router               # Vue-Router
│   ├── store                # Vuex
│   ├── styles               # 全局样式
│   ├── utils                # 工具库
│   ├── views                # 业务页面入口和常用模板
│   ├── App.vue              # Vue 模板入口
│   └── config.js            # ajax配置文件
│   └── main.js              # Vue 入口 JS
├── package.json
├── README.md
└── vue.config.js
```

## 备注

```
一些常用的工具网站
1.https://www.iconfont.cn/
2.https://antdv.com/docs/vue/introduce-cn/
```
## 技术栈
Vue + antd(待定)

## 功能简介

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
