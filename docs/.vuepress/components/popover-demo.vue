<template>
  <div>
    <g-popover>
      <template #content>
        <div>这是top popver的内容</div>
      </template>
      <g-button>top</g-button>
    </g-popover>
    <g-popover position="bottom">
      <template #content>
        <div>这是 bottom popover的内容</div>
      </template>
      <g-button>bottom</g-button>
    </g-popover>
    <g-popover position="right">
      <template #content>
        <div>这是right popover的内容</div>
      </template>
      <g-button>right</g-button>
    </g-popover>
    <g-popover position="left">
      <template #content>
        <div>这是 left popover的内容</div>
      </template>
      <g-button>left</g-button>
    </g-popover>
  </div>
</template>

<script>
import Popover from '../../../src/components/popover'
import Button from '../../../src/components/button'
export default {
  components: {
    'g-popover': Popover,
    'g-button': Button
  }
};
</script>
