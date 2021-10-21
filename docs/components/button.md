---
title: Button-按钮
---

# 按钮

### 预览

<clientOnly>
    <button-demo style="margin-top: 16px"></button-demo>
</clientOnly>

### 使用方法
``` html 
<g-button>按钮</g-button>
<g-button icon="setting">按钮</g-button>
<g-button icon="setting" :loading="loading1">加载</g-button>
<g-button
    icon="setting"
    icon-position="icon-right"
    :loading="loading2"
    @click="loading2 = !loading2"
    >设置</g-button
>
<g-button
    icon="download"
    icon-position="icon-right"
    :loading="loading3"
    @click="loading3 = !loading3"
    >下载</g-button
>
<g-button disabled>禁用</g-button>
<g-button-group>
    <g-button icon="left" icon-position="icon-left">上一页</g-button>
    <g-button>中间</g-button>
    <g-button icon="right" icon-position="icon-right">下一页</g-button>
</g-button-group>
```

### Props 
| 参数 | 说明 | 类型 | 可选值 | 默认值  |
| --- | --- | --- | --- | --- |
| icon | 图标 | String | --- | --- |
| icon-position | 图标位置 | String |icon-left/icon-right | icon-left |
| loading | 是否加载 | Boolean | --- | false |
| disabled | 禁用 | Boolean | --- | false|

