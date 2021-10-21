---
title: Grid-网格布局 
---

# 网格布局

### 预览
<clientOnly>
	<grid-demo style="margin-top:16px"></grid-demo>
</clientOnly>


### 使用方法


``` html
<div class="grid">
    <g-row>
      <g-col span="12">12</g-col>
      <g-col span="12">12</g-col>
    </g-row>
    <g-row>
      <g-col span="2">2</g-col>
      <g-col span="12" offset="3">12</g-col>
    </g-row>
    <g-row align="between">
      <g-col span="5">5</g-col>
      <g-col span="2">2</g-col>
      <g-col span="12">12</g-col>
    </g-row>
  </div>
```
```css
* {
  box-sizing: border-box;
}
.grid {
  border: 1px solid blue;
  padding: 12px;
}
.grid .col {
  background: #abcdef;
  border: 1px solid #a8a8eb;
}
```

### 响应式布局
请调整屏幕宽度看不同效果
<clientOnly>
	<grid-responsive-demo style="margin-top:16px"></grid-responsive-demo>
</clientOnly>

### 使用方法
```html
<div class="grid">
  <g-row align="between">
    <g-col span="24" :ipad="{span:10}" :narrowPc="{span:6}" :pc="{span:8}"></g-col>
    <g-col span="24" :ipad="{span:4}"  :narrowPc="{span:12}" :pc="{span:8}"></g-col>
    <g-col span="24" :ipad="{span:10}" :narrowPc="{span:6}" :pc="{span:8}"></g-col>
  </g-row>
</div>
```

### Row Props
| 参数 | 说明 | 类型 | 可选值 | 默认值  |
| --- | --- | --- | --- | --- |
| align | 对齐方式 | String | left/right/center/between | left |

### Col Props
| 参数 | 说明 | 类型 | 可选值 | 默认值  |
| --- | --- | --- | --- | --- |
| span | 占据的列数 | String/Number | --- | 24 |
| offset | 偏移的列数 | String/Number | --- | 0 |
| ipad | <769px 属性对象 | Object (例:{ span:4,offset:2 }) | --- | --- |
| narrowPc | <993px 属性对象 | Object (例:{ span:4,offset:2 }) | --- | --- |
| pc | <1201px 属性对象 | Object (例:{ span:4,offset:2 }) | --- | --- |
| widePc | >=1201px 属性对象 | Object (例:{ span:4,offset:2 }) | --- | --- |
