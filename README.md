# 一个Vue UI 组件
[![Build Status](https://app.travis-ci.com/cxyxiaoyuyu/vue2-gulu.svg?branch=main)](https://app.travis-ci.com/cxyxiaoyuyu/vue2-gulu)

## 介绍
这是我学习vue2过程中写的UI 框架

## 开始使用

1. 配置 

    #使用本组件请使用盒模型bordex-box
    ```
    *,*::before,*::after {box-sizing:border-box;}

2. 安装 

    ```
    npm i --save xiaoyu-vue2-gulu
    或
    yarn add xiaoyu-vue2-gulu
    ```

3. 快速上手 


* 普通组件引入

``` js
import { Button,Input } from 'xiaoyu-vue2-gulu'

Vue.component('g-button',Button)
Vue.component('g-input',Input)
```

* 普通组件使用
```html
<g-button>按钮</g-button>
<g-input v-model="xxx"></g-input>
```

* toast 组件引入和使用 
```javascript
import {Plugin} from 'xiaoyu-vue2-gulu'
```
## 文档
[官网](https://cxyxiaoyuyu.github.io/vue2-gulu/
)




