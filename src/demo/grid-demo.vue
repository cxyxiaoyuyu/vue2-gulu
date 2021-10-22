<template>
  <div class="grid">
    <g-row>
      <g-col span="12">12</g-col>
      <g-col span="12">12</g-col>
    </g-row>
    <g-row>
      <g-col span="2">2</g-col>
      <g-col span="12" offset="3">12</g-col>
    </g-row>
    <g-row align="between">
      <g-col span="5">5</g-col>
      <g-col span="2">2</g-col>
      <g-col span="12">12</g-col>
    </g-row>
  </div>
</template>

<script>
import Row from "../components/row";
import Col from "../components/col";
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
