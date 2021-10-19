<template>
  <div>
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
      icon-name="download"
      icon-position="icon-right"
      :loading="loading3"
      @click="loading3 = !loading3"
      >下载</g-button
    >
    <g-button disabled>禁用</g-button>
    <g-button-group></g-button-group>
  </div>
</template>

<script>
import Button from "../../../src/button.vue";
import ButtonGroup from "../../../src/button-group.vue";
export default {
  data() {
    return {
      loading1: true,
      loading2: false,
      loading3: false,
    };
  },
  components: {
    "g-button": Button,
    "g-button-group": ButtonGroup
  },
};
</script>

    