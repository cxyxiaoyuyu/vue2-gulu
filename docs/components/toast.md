---
title: Toast 
---

# 文本框

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
import Plugin from "../../../src/plugin";
import Button from '../../../src/button.vue'
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