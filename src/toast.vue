<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'GuluToast',
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    autoCloseDelay: {
      type: Number,
      default: 5
    }
  },
  mounted(){
    if(this.autoClose){
      setTimeout(() => {
        this.close()
      }, this.autoCloseDelay * 1000);
    }
  },
  methods: {
    close(){
      this.$el.remove()
      this.$destroy
    }
  }
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
