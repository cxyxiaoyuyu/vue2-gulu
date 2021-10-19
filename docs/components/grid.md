---
title: 网格布局 
---

# 网格布局

## 预览
<clientOnly>
	<grid-demo style="margin-top:16px"></grid-demo>
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
<div>
	<g-input v-model="message2" error="不能为空" @change="changeInput"></g-input>
</div>
```
