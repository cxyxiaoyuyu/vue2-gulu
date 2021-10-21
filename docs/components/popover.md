---
title: Popover-弹框
---

# Popover-弹框 

### 预览

* 点击 弹出popover
<clientOnly>
    <popover-demo style="margin-top: 16px"></popover-demo>
</clientOnly>

* hover 弹出popover
<clientOnly>
    <popover-hover-demo style="margin-top: 16px"></popover-hover-demo>
</clientOnly>

### 使用方法
``` html 
<g-popover position="bottom">
    <template #content>
        <div>这是 bottom popover的内容</div>
    </template>
    <g-button>bottom</g-button>
</g-popover>
```

### 可关闭的popover
<clientOnly>
    <popover-close-demo style="margin-top: 16px"></popover-close-demo>
</clientOnly>


### 使用方法
```html
<g-popover>
    <template #content="{close}">
        <div>点关闭按钮关闭弹框</div> 
        <g-button @click="close">关闭</g-button>
    </template>
    <g-button>close popover</g-button>
</g-popover>
```

### Props
| 参数 | 说明 | 类型 | 可选值 | 默认值  |
| --- | --- | --- | --- | --- |
| position | 弹框位置 | String | top/bottom/left/right | top |
| trigger | 触发方式 | String | click/hover | click |


