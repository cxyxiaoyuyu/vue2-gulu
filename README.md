# 一个Vue UI 组件
[![Build Status](https://app.travis-ci.com/cxyxiaoyuyu/vue2-gulu.svg?branch=main)](https://app.travis-ci.com/cxyxiaoyuyu/vue2-gulu)

## 介绍
学习vue2过程中写的UI 框架

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
2. 安装 xiaoyu-vue2-gulu(parcel 方式)
    ```
    npm i --save xiaoyu-vue2-gulu
    ```

3. 引入 xiaoyu-vue2-gulu
    ```
    import { Button,ButtonGroup,Icon} from 'xiaoyu-vue2-gulu'
    import 'xiaoyu-vue2-gulu/dist/index.css'

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



