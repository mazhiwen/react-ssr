# 学习webpack
基于webpack官网教程  
本项目可直接用作webpack项目demo

***
## 1. tree-shaking， 死代码 dead code ，按需加载
目前发现对node_modules 无效  
如果所有代码都不包含副作用，我们就可以简单地将该属性标记为 false，来告知 webpack，它可以安全地删除未用到的 export 导出。  
"sideEffects": false  
如果你的代码确实有一些副作用，那么可以改为提供一个数组：
```
{
  "name": "your-project",
  "sideEffects": [
    "./src/some-side-effectful-file.js"
  ]
}
```
[tree-shaking](https://webpack.docschina.org/guides/tree-shaking/)

注意：  
* 使用 ES2015 模块语法（即 import 和 export）  
* 在项目 package.json 文件中，添加一个 "sideEffects" 入口。  
* 引入一个能够删除未引用代码(dead code)的压缩工具(minifier)（例如 UglifyJSPlugin）。

## 2. 启动webpack配置使用config 或者 dev,prod

### dev prod
```
"start": "webpack-dev-server --open --config webpack.dev.js",
"build": "webpack --config webpack.prod.js"
```
### config
```
"build": "webpack"
```

## 3. 代码分离
#### 同步
```
webpack.optimize.SplitChunksPlugin
```
#### 异步 
```
import(/* webpackChunkName: "lodash" */ 'lodash').then(_ => {
  var element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return element;
}).catch(error => 'An error occurred while loading the component');
```
OR
```
async function getComponent() {
  const _ = await import(/* webpackChunkName: "lodash" */ 'lodash');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return element;
}
getComponent().then(component => {
  document.body.appendChild(component);
});
```

## 4. 懒加载
```
button.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
  var print = module.default;
  print();
});
```
注意当调用 ES6 模块的 import() 方法（引入模块）时，必须指向模块的 .default 值，因为它才是 promise 被处理后返回的实际的 module 对象。


## 5. mode 配置  



## 6. 创建library
兼容es6 commonjs amd cmd


## 7. shimming  

让 webpack 打包时自动发现关键的全局变量并自动的引入。它是一种隐性的全局变量。  

```
module.exports = {
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      Config: path.resolve(__dirname, '../src/utils/Config')
    }
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
    new webpack.ProvidePlugin({
      Config: "Config"
    }),
  ],
  module: {
  }
};
```

## 8. devtool

此选项控制是否生成，以及如何生成 source map。

https://github.com/webpack/webpack/tree/master/examples/source-map


## 9. devserver
```
webpack-dev-server 配置 devServer
webpack-dev-middleware 
```
https://juejin.im/entry/574f95922e958a00683e402d

## 10. 代码检测
[eslint](https://github.com/webpack-contrib/eslint-loader)



## 11.resolve

alias:{
  'vue': 'vue/dist/vue.esm.js',
  'api': path.resolve(__dirname, 'src/api')
}

import api from 'api';





## 优化


https://www.v2ex.com/t/448632


0.代码中是否有过多实例？
1.把 webpack 升级到 4.0。
2.优化 entrys.。
3.使用 DLLplugin,happypack 等构建加速插件。
4.检查 loader/eslint 是否配置错误 /不合理.
5.根据开发 /生产环境配置不同的 webpack 流程，或者使用 webpack4.0 的 mode 进行处理
6.babel 是否 exclude 掉了 node_modules，是否开启了 cacheDirectory
7.resolve 的文件夹是否过多？
8.是否使用 HMR 替换了 HotReload?
9.loader 是否正确的配置了生命周期且只干了必须要干的活？
10.是否使用了过多无必要的插件？
11.是否开启了 uglifyjs-webpack-plugin 的 cache ？
















# react相关



react 是基本虚拟dom
reactdom 是web dom操作

