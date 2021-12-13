---
title: Breadcrumb-面包屑 
---

# 面包屑

### 预览

<clientOnly>
  <breadcrumb-demo style="margin-top: 16px"></breadcrumb-demo>
</clientOnly>

### 使用方法
``` html 
<g-bread-crumb seprator=">">
<g-bread-crumb-item to="{path: '/'}">主页</g-bread-crumb-item>
  <g-bread-crumb-item>用户管理</g-bread-crumb-item>
  <g-bread-crumb-item>用户列表</g-bread-crumb-item>
</g-bread-crumb>
```

### Props 
| 参数 | 说明 | 类型 | 可选值 | 默认值  |
| --- | --- | --- | --- | --- |
| seperator | 分隔符 | String | ... | / |
| to | 路由 | Object | ... | ... 

