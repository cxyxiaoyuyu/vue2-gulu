<template>
<div>
  <div v-for="item in source" :key="item.id">
    <cascader-item :sourceItem="item">
  </div>
</div>
</template>

<script>
import CascaderItem from "./cascader-item.vue";
export default {
  props: {
    source: {
      type: Array,
    },
  },
  components: {
    CascaderItem,
  },
};
</script>
