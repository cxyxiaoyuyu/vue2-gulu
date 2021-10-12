<template>
  <button class="g-button" :class="iconPosition" @click="$emit('click')">
    <g-icon v-if="loading" icon="loading" class="loading"></g-icon>
    <g-icon v-if="icon && !loading" :icon="icon"></g-icon>
    <slot></slot>
  </button>
</template>

<script>
import Icon from './icon.vue'
export default {
  components: {
    'g-icon': Icon
  },
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    icon: {},
    iconPosition: {
      type: String,
      default: "icon-left",
      validator(value) {
        return value === "icon-left" || value === "icon-right";
      },
    },
  }
};
</script>

<style lang="scss" scoped>
$button-height: 32px;
$font-size: 14px;
$button-bg: white;
$button-active-bg: #eee;
$border-radius: 4px;
$color: #333;
$border-color: #999;
$border-color-hover: #666;

.g-button {
  font-size: $font-size;
  height: $button-height;
  padding: 0 1em;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background: $button-bg;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  cursor: pointer;
  &:hover {
    border-color: $border-color-hover;
  }
  &:active {
    background-color: $button-active-bg;
  }
  &:focus {
    outline: none;
  }
  & > .loading {
    animation: loading 2s infinite linear;
  }
}
@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.g-button.icon-right {
  flex-direction: row-reverse;
  & > .icon {
    margin-left: 0.2em;
  }
}
.g-button.icon-left .icon {
  margin-right: 0.2em;
}
</style>

