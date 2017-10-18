
***
# 热更新、ES6/7、LESS、Router4.x、redux、webpack3.x、antd、code splitting
## 简介
**此脚手架集成了react开发常用技术栈，且其中的webpack、router、browser-sync等(工具库插件)基本为目前(2017/10/17)最新版本。**
### 适用人群
* 想要学习单向数据流框架搭建的新手、以及想要一个比较干净、简洁的框架从事实践项目的开发者。
* 因为引入了ant组件库，适合想要重构公司内部管理系统的开发者。
* 使用的webpack-dev-middleware和webpack-hot-middleware进行热更新 且开发环境生产环境分别配置，适合想要把玩webpack的开发者。

### Installation 教程
fork到你的账号，或者 download 项目到本地

1. 安装依赖包。

    `npm install 或者cnpm install`
2. 运行demo。

   `npm start`
3. 将会自动打开浏览器。
4. 生成部署包。

    `npm run build`

### 项目结构
```text
├─.babelrc
├─.gitignore
├─README.md
├─index.html      // 首页模板
├─package.json
├─src             // 源文件
|  ├─index.js     // 入口
|  ├─routes.js    // 路由
|  ├─style.css
|  ├─utils        // 工具库文件
|  ├─store        // 创建 redux store
|  ├─public       // css 等公用文件
|  ├─pages        // 页面
|  ├─logic        // 逻辑 reducer action
|  ├─lib          // 第三方库
|  ├─components   // 自定义组件
├─build
|   ├─dev.js
|   ├─prod.js
|   ├─webpack.base.conf.js
|   ├─webpack.dev.conf.js
|   └webpack.prod.conf.js
