---
title: 文本框 
---

# 文本框

## 预览
<clientOnly>
    <input-demo></input-demo>
</clientOnly>


## 使用方法
``` javascript 
import {Input} from 'xiaoyu-test-1' 
import Vue from vue

new Vue({
    data(){
        return {
            message: 'hello vuepress'
        }
    },
    methods: {
        changeInput(){
            console.log('change Input')
        }
    },
    components: {
        'g-input': Input 
    },
})
```

``` html
<g-input v-model="message"></g-input>
<g-input value="disabled" disabled></g-input>
<g-input value="readonly" readonly></g-input>
<g-input value="" error="不能为空" @change="changeinput"></g-input>
```
