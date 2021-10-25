---
title: Toast-提示框 
---

# Toast-提示框

## 预览
<clientOnly>
	<toast-demo style="margin-top:16px"></toast-demo>
</clientOnly>


## 使用方法
```html
	<g-button @click="showToast('top')">top</g-button>
	<g-button @click="showToast('middle')">middle</g-button>
	<g-button @click="showToast('bottom')">bottom</g-button>
```

```javascript
import Vue from 'vue'
import Plugin from "@/components/plugin";
import Button from '@/components/button.vue'
Vue.use(Plugin)
export default {
  components: {
    'g-button': Button
  },
  methods: {
    showToast(position){
      this.$toast(`这是一个toast提示框`, {
        position,
        enableHtml: false,
        closeButton: {
          text: '好的',
          callback () {
            console.log('我已经知道了')
          }
        },
        autoClose: false,  
      })
    }
  }
};
```

### Props 
| 参数 | 说明 | 类型 | 可选值 | 默认值  |
| --- | --- | --- | --- | --- |
| position | 位置 | String | top/middle/bottom | top |
| enableHtml | 是否支持html | Boolean | --- | false |
| autoClose | 是否自动关闭或自动关闭时间 | Boolean/Number | --- | 5(5秒后自动关闭) |
| closeButton | 关闭按钮内容以及关闭回调函数 | Object | --- | {text: '关闭', callback: undefined}|
