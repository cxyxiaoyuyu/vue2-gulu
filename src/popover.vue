<template>
 <div class="popover" @click.stop="xxx">
  <div class="content-wrapper" v-if="visible" @click.stop>
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
    document.addEventListener('click',()=>{
      if(this.visible){
        this.visible = false
      }
    })
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
  margin-top: 100px;
  .content-wrapper {
    border: 1px solid #ddd;
    position: absolute;
    left: 0;
    bottom:100%; 
    padding: 20px;
    background:white;
    margin-bottom: 20px;
    border-radius: 5px;
  }
}
</style>