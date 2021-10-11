# 一个Vue UI 组件
[![Build Status](https://www.travis-ci.org/cxyxiaoyuyu/gulu.svg?branch=master)](https://www.travis-ci.org/cxyxiaoyuyu/gulu)

## 介绍

## 开始使用

1. 安装(parcel 方式)

#使用本组件请使用盒模型bordex-box
```
*,*::before,*::after {box-sizing:border-box;}
```
还需要设置默认浏览器样式
```
html {
    --button-height: 32px;
    --font-size: 14px;
    --button-bg: white;
    --button-active-bg: #eee;
    --border-radius: 4px;
    --color: #333;
    --border-color: #999;
    --border-color-hover: #666;
}
```
2. 安装 xiaoyu-test-1(parcel 方式)
```
npm i --save xiaoyu-test-1
```

3. 引入 xiaoyu-test-1
```
import { Button,ButtonGroup,Icon} from 'xiaoyu-test-1'
import 'xiaoyu-test-1/dist/index.css'

Vue.component('g-button',Button)
Vue.component('button-group',ButtonGroup)
Vue.component('g-icon',Icon)
```

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码

## 作者： xiaoyu



