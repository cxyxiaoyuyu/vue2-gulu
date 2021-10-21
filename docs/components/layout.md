---
title: Layout-布局 
---

# Layout-布局 

## 预览
<clientOnly>
	<layout-demo style="margin-top:16px"></layout-demo>
</clientOnly>


## 使用方法


``` html
<div>
  <g-layout>
    <g-header>header</g-header>
    <g-content>content</g-content>
    <g-footer>footer</g-footer>
  </g-layout>
  <hr>
  <g-layout>
    <g-header>header</g-header>
    <g-layout>
      <g-sider>sider</g-sider>
      <g-content>content</g-content>
    </g-layout>
    <g-footer>footer</g-footer>
  </g-layout>
</div>
```
``` javascript 
import Layout from "../../../src/layout";
import Header from "../../../src/header";
import Sider from "../../../src/sider";
import Content from "../../../src/content";
import Footer from "../../../src/footer";
export default {
  components: {
    "g-layout": Layout,
    "g-header": Header,
    "g-sider": Sider,
    "g-content": Content,
    "g-footer": Footer,
  },
};
```
```css
.layout {
  width: 800px;
  min-height: 100px;
}
.header,
.footer {
  height: 80px;
  background: #abcdea;
}
.sider {
  width: 180px;
  background: #abcdef;
  min-height: 100px;
}
.layout .content {
  background: #adeacd;
  min-height: 100px;
}
```
