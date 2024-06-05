# 尚品汇前端

## 1. 介绍

尚硅谷 vue2 项目 - 尚品汇前端代码

## 2. 项目结构

- `node_modules`：存放项目依赖
- `public`：一般放一些静态资源，需要注意的是，该文件夹中的资源在被 `webpack` 打包时会原封不动打包到 dist 文件夹中
- `src`：源代码文件夹
    - `assets`：也放置静态资源（多个组件公用的静态资源，如图片、icon 等），需要注意的是，该文件夹中的静态资源会被 `webpack` 当做模块打包到 js 文件中
    - `components`：一般放置非路由组件
    - `App.vue`：项目的根组件
    - `main.js`：程序的入口文件，是最先被执行的文件
- `babel.config.js`：与 `babel` 相关的配置文件
- `package.json`：与项目依赖管理、脚本执行等相关的配置文件
- `package-lock.json`：锁定包版本

## 3. 其他配置

### 3.1 浏览器自动打开

配置 `package.json` 文件让项目运行时浏览器自动打开：

```json
{
  "scripts": {
    "serve": "vue-cli-service serve --open",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  }
}
```

### 3.2 eslint 关闭

配置 `vue.config.js` 关闭自动校验工具

```js
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false
})
```

### 3.3 配置别名

配置 `jsconfig.json` 给 `src` 路径起别名：

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "esnext",
    "baseUrl": "./",
    "moduleResolution": "node",
    "paths": {
      "@/*": [
        "src/*"
      ]
    }
  }
}
```