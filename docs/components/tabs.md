---
title: Tabs-标签 
---

# Tabs-标签 

### 预览
<clientOnly>
  <tabs-demo></tabs-demo>
</clientOnly>

### 使用方法
```html
<g-tabs selected="css">
  <g-tabs-head>
    <template #actions>
      <g-button>设置</g-button>
    </template>
    <g-tabs-item name="html">HTML</g-tabs-item>
    <g-tabs-item name="xml" disabled>XML</g-tabs-item>
    <g-tabs-item name="css">CSS</g-tabs-item>
    <g-tabs-item name="js">JS</g-tabs-item>
  </g-tabs-head>
  <g-tabs-body>
    <g-tabs-pane name="html">这是HTML的内容</g-tabs-pane>
    <g-tabs-pane name="xml">这是XML的内容</g-tabs-pane>
    <g-tabs-pane name="css">这是CSS的内容</g-tabs-pane>
    <g-tabs-pane name="js">这是JavaScritp的内容</g-tabs-pane>
  </g-tabs-body>
</g-tabs>
```

### Tabs Props 
| 参数 | 说明 | 类型 | 可选值 | 默认值  |
| --- | --- | --- | --- | --- |
| selected | 当前选择的tab | String | --- | --- |

### tabs-item Props 
| 参数 | 说明 | 类型 | 可选值 | 默认值  |
| --- | --- | --- | --- | --- |
| name | tab名称 | String | --- | --- |
| disabled | tab禁用 | Boolead | --- | false |

### tabs-pane Props 
| 参数 | 说明 | 类型 | 可选值 | 默认值  |
| --- | --- | --- | --- | --- |
| name | tab内容名称 | String | --- | --- |

