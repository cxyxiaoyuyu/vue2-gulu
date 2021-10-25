<template>
  <div class="grid">
    <g-row align="between">
      <g-col span="24" :ipad="{span:10}" :narrowPc="{span:6}" :pc="{span:8}"></g-col>
      <g-col span="24" :ipad="{span:4}"  :narrowPc="{span:12}" :pc="{span:8}"></g-col>
      <g-col span="24" :ipad="{span:10}" :narrowPc="{span:6}" :pc="{span:8}"></g-col>
    </g-row>
  </div>
</template>

<script>
import Row from "../../../src/components/row";
import Col from "../../../src/components/col";
export default {
  components: {
    "g-row": Row,
    "g-col": Col
  },
};
</script>
<style scoped>
* {
  box-sizing: border-box;
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
