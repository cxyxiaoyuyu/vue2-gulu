---
title: Drawer-抽屉 
---

# 抽屉

### 预览
<clientOnly>
	<drawer-demo style="margin-top:16px"></drawer-demo>
</clientOnly>


### 使用方法


``` html
<div>
  <label><input type="radio" value="top" v-model="direction"/>从上往下</label>
  <label><input type="radio" value="right" v-model="direction"/>从右往左</label>
  <label><input type="radio" value="left" v-model="direction"/>从左往右</label>
  <label><input type="radio" value="bottom" v-model="direction" />从下往上开</label>

  <g-button @click="drawerVisible = true">open drawer</g-button>

  <g-drawer title="我是标题" :visible.sync="drawerVisible" :direction="direction">
    <span>我来啦!</span>
  </g-drawer>
</div>
```

### Props
| 参数 | 说明 | 类型 | 可选值 | 默认值  |
| --- | --- | --- | --- | --- |
| direction | 抽屉打开的方向 | String | top/left/right/bottom | bottom |
| visible | 是否显示 Drawer，支持 .sync 修饰符 | Boolean | ... | false |
