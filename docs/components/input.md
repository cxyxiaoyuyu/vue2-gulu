---
title: Input-文本框 
---

# Input-文本框

### 预览
<clientOnly>
	<input-demo style="margin-top:16px"></input-demo>
</clientOnly>


### 使用方法
``` javascript 
import {Input} from 'xiaoyu-vue2-gulu' 
import Vue from vue

new Vue({
	data(){
		return {
			message: 'hello vuepress'
		}
	},
	methods: {
		changeInput(value){
			console.log('change Input',value)
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

### Props
| 参数 | 说明 | 类型 | 可选值 | 默认值  |
| --- | --- | --- | --- | --- |
| value | 值 | String/Number | --- | --- |
| disabled | 禁用 | Boolean | --- | false |
| readonly | 只读 | Boolean | --- | false |
| error | 是否错误提示 | Boolean | --- | --- |

### 事件
| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- | --- | --- |
| input | input 值改变时触发 | (value: string) | 
| change | input失去焦点或用户按下回车时触发 | (value: string) | 
| focus | input得到焦点时 | (value: string) |
| blur | input失去焦点时 | (value: string) |
