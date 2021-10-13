<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'GuluToast',
}
</script>
<style scoped>
.toast {
  border: 1px solid red;
  font-size: 14px;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
</style>
