<template>
  <div>
    <g-popover>
      <template #content="{ close }">
        <div>点关闭按钮关闭弹框</div>
        <g-button @click="close">关闭</g-button>
      </template>
      <g-button>close popover</g-button>
    </g-popover>
  </div>
</template>

<script>
import Popover from "../components/popover";
import Button from "../components/button";
export default {
  components: {
    "g-popover": Popover,
    "g-button": Button,
  },
};
</script>
