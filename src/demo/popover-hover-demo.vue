<template>
  <div>
    <g-popover trigger="hover">
      <template #content>
        <div>这是top popver的内容</div>
      </template>
      <g-button>top</g-button>
    </g-popover>
    <g-popover position="bottom" trigger="hover">
      <template #content>
        <div>这是 bottom popover的内容</div>
      </template>
      <g-button>bottom</g-button>
    </g-popover>
    <g-popover position="right" trigger="hover">
      <template #content>
        <div>这是right popover的内容</div>
      </template>
      <g-button>right</g-button>
    </g-popover>
    <g-popover position="left" trigger="hover">
      <template #content>
        <div>这是 left popover的内容</div>
      </template>
      <g-button>left</g-button>
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
