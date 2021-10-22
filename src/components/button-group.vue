<template>
  <div class="button-group" @click="$emit('click')">
		<slot></slot>
  </div>
</template>

<script>
import Button from "./button";
export default {
  components: {
    "g-button": Button,
  },
};
</script>

<style lang="scss" scoped>
.button-group {
  display: inline-flex;
  vertical-align: middle;
  & > .g-button:not(last-child) {
    margin-right: -1px;
    border-radius: 0;
    &:hover {
      position: relative;
      z-index: 1;
    }
  }
	& > .g-button:first-child {
    border-radius: 0;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
	}
  & > .g-button:last-child {
    border-radius: 0;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    & > :hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>

