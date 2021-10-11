---
title: 快速上手
---

# 快速上手

## 安装

请参考 [安装](../install/) 章节


## 引入组件 

```javascript
import {Button} from 'xiaoyu-test-1'
import Vue from 'vue'

new Vue({
  el: '#app',
  components: {
    'g-button': Button
  }
})
```

## 使用组件
``` html
<g-button>按钮</g-button>
```