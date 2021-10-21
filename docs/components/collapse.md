---
title: Collapse-手风琴 
---

# Collapse-手风琴 

### 预览

* 可以展开多个
<clientOnly>
    <collapse-demo style="margin-top: 16px"></collapse-demo>
</clientOnly>

* 只能展开一个
<clientOnly>
    <collapse-single-demo style="margin-top: 16px"></collapse-single-demo>
</clientOnly>

### 使用方法
```html
<g-collapse :selected.sync="selectedCollapse" :single="true">
    <g-collapse-item title="标题1" name="1">内容一</g-collapse-item>
    <g-collapse-item title="标题2" name="2">内容二</g-collapse-item>
    <g-collapse-item title="标题3" name="3">内容三</g-collapse-item>
</g-collapse>
```

```javascript
import Collapse from "../../../src/collapse.vue";
import CollapseItem from '../../../src/collapse-item.vue';
export default {
  data(){
    return {
      selectedCollapse: ['2']
    }
  },
  components: {
    "g-collapse": Collapse,
    "g-collapse-item": CollapseItem
  },
};
```

### 选项

| 参数 | 说明 | 类型 | 可选值 | 默认值  |
| --- | --- | --- | --- | --- |
| selected | 选择展开的项 | Array | --- | 必填 |
| single | 是否单一展开 | Boolean | --- | false|