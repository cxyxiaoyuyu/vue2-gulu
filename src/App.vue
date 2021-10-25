<template>
  <div id="app">
    <g-button icon="setting" :loading="true">按钮</g-button>
    <g-input v-model="a"></g-input>

    <g-button @click="showToast">点我弹出toast</g-button>

    <g-button-group>
      <g-button icon="left" icon-position="icon-left">上一页</g-button>
      <g-button icon="right" icon-position="icon-right">下一页</g-button>
    </g-button-group>

    <div class="grid">
      <g-row>
        <g-col span="4"></g-col>
        <g-col span="5"></g-col>

        <g-col span="6"></g-col>
      </g-row>
    </div>
  </div>
</template>

<script>
import { Button, Input, Plugin, Row, Col } from "xiaoyu-vue2-gulu";
import Vue from "vue";
Vue.use(Plugin);
export default {
  name: "app",
  data() {
    return {
      a: "hello xiaoyu",
    };
  },
  methods: {
    showToast() {
      this.$toast("欢迎使用xiaoyu-gulu", {
        position: "middle",
        autoClose: true,
      });
    },
  },
  components: {
    "g-button": Button,
    "g-input": Input,
    "g-row": Row,
    "g-col": Col,
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.grid {
  border: 1px solid blue;
  padding: 12px;
}
.grid .col {
  background: #abcdef;
  border: 1px solid #a8a8eb;
}
</style>
