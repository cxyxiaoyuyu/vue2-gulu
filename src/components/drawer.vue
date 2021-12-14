<template>
  <div :class="['drawer-mask', { open: visible }]" @click.self="closeDrawer">
    <div :class="['drawer', direction]">
      <div class="title">{{ title }}</div>
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    visible: {
      type: Boolean,
      default: false,
    },
    direction: {
      type: String,
      default: "bottom",
    },
  },
  methods: {
    closeDrawer() {
      this.$emit("update:visible", false);
    },
  },
};
</script>

<style lang="scss" scoped>
.drawer-mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  width: 100vw;
  height: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
  overflow: hidden; // 防止父元素高度为0 但是子元素挡住外部元素
  transition: opacity 0.2s, height 1ms;
  transition-delay: .2s;  // 防止高度一下塌陷 子元素动画显示不出来
  .drawer {
    background: #fff;
    padding: 20px;
    position: absolute;
    transition: transform 0.2s linear;
    &.top,
    &.bottom {
      min-height: 200px;
      left: 0;
      right: 0;
    }
    &.top {
      top: 0;
      transform: translateY(-100%);
    }
    &.bottom {
      bottom: 0;
      transform: translateY(100%);
    }
    &.left,
    &.right {
      min-width: 200px;
      top: 0;
      bottom: 0;
    }
    &.left {
      left: 0;
      transform: translateX(-100%);
    }
    &.right {
      right: 0;
      transform: translateX(100%);
    }
  }

  &.open {
    height: 100vh;
    opacity: 1;
    transition-delay: 0ms;
    .drawer {
      &.top,
      &.bottom {
        transform: translateY(0);
      }
      &.left,
      &.right {
        transform: translateX(0);
      }
    }
  }
}
</style>