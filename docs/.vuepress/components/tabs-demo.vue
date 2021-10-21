<template>
  <div class="tabs-wrap">
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
  </div>
</template>

<script>
import Tabs from "../../../src/tabs";
import TabsHead from "../../../src/tabs-head";
import TabsBody from "../../../src/tabs-body";
import TabsItem from "../../../src/tabs-item";
import TabsPane from "../../../src/tabs-pane";
import Button from "../../../src/button";
export default {
  components: {
    "g-tabs": Tabs,
    "g-tabs-head": TabsHead,
    "g-tabs-body": TabsBody,
    "g-tabs-item": TabsItem,
    "g-tabs-pane": TabsPane,
    "g-button": Button,
  },
};
</script>

<style lang="scss" scoped>
.tabs-wrap {
  border: 1px solid #abcdef;
  width: 800px;
  padding: 20px;
  margin-top: 20px;
}
</style>