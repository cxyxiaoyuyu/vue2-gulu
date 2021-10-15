<template>
 <div class="popover" @click="xxx">
  <div class="content-wrapper" v-if="visible">
    <slot name="content"></slot>
  </div>
  <slot></slot>
 </div>
</template>

<script>
export default {
  name: "GuluPopover",
  data(){
    return { visible: false}
  },
  created(){
    //document.addEventListener('click',x)
  },
  methods: {
    xxx(){
      this.visible = !this.visible
    }
  }
}
</script>

<style lang="scss" scoped>
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
  border: 1px solid blue;
  .content-wrapper {
    border: 1px solid red;
    position: absolute;
    left: 0;
    bottom:100%; 
  }
}
</style>