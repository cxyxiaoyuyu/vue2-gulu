<template>
  <div>
    <g-collapse :selected.sync="selectedCollapse">
      <g-collapse-item title="标题1" name="1">内容一</g-collapse-item>
      <g-collapse-item title="标题2" name="2">内容二</g-collapse-item>
      <g-collapse-item title="标题3" name="3">内容三</g-collapse-item>
    </g-collapse>
  </div>
</template>

<script>
import Collapse from "../../../src/collapse.vue";
import CollapseItem from '../../../src/collapse-item.vue';
export default {
  data(){
    return {
      selectedCollapse: ['1','2']
    }
  },
  components: {
    "g-collapse": Collapse,
    "g-collapse-item": CollapseItem
  },
};
</script>

    