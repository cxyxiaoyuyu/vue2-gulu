<template>
 <div class="bread-crumb-container">
  <slot></slot>
 </div>
</template>

<script>
export default {
  props: {
    seprator: {
      type: String,
      // default: '/'
    }
  }
}
</script>

<style lang="scss">
.bread-crumb-container {
 display: flex;
 align-items: center;
 .bread-crumb-item:last-child {
  .seprator {
    display: none; 
  }
 }
}
</style>