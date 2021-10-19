<template>
  <div class="grid">
    <g-row>
      <g-col span="12">12</g-col>
      <g-col span="12">12</g-col>
    </g-row>
    <g-row>
      <g-col span="2">2</g-col>
      <g-col span="12">12</g-col>
    </g-row>
    <g-row align="between">
      <g-col span="5">5</g-col>
      <g-col span="2">2</g-col>
      <g-col span="12">12</g-col>
    </g-row>
    <g-row gutter="20">
      <g-col span="5">5</g-col>
      <g-col span="7">7</g-col>
      <g-col span="12">12</g-col>
    </g-row>
  </div>
</template>

<script>
import Row from "../../../src/row";
import Col from "../../../src/col";
export default {
  components: {
    "g-row": Row,
    "g-col": Col
  },
};
</script>
