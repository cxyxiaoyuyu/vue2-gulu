<template>
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
</template>

<script>
import Drawer from "../../../src/components/drawer.vue";
import Button from "../../../src/components/button.vue";
export default {
  data() {
    return {
      drawerVisible: false,
      direction: 'top'
    };
  },
  methods: {
    showDrawer() {
      this.drawerVisible = true;
    },
  },
  components: {
    "g-drawer": Drawer,
    "g-button": Button,
  },
};
</script>

<style lang="scss" scoped>
</style>