---
title: 按钮
---

# 按钮

## 预览

<clientOnly>
    <button-demo></button-demo>
</clientOnly>

## 使用方法
``` javascript 
import {Button} from 'xiaoyu-test-1' 
import Vue from vue

new Vue({
    data(){
        return {
            loading1: true,   
            loading2: false,   
            loading3: false,   
        }
    },
    components: {
        'g-button': Button
    },
})
```

``` html 
    <g-button>按钮</g-button>
    <g-button icon-name="setting">按钮</g-button>
    <g-button icon-name="setting" :loading="loading1">加载</g-button>
    <g-button icon-name="setting" icon-position="icon-right" :loading="loading2" @click="loading2=!loading2">设置</g-button>
    <g-button icon-name="download" icon-position="icon-right" :loading="loading3" @click="loading3=!loading3">下载</g-button>
    <g-button disabled>下载</g-button>
```

