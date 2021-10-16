<template>
 <div class="popover" @click="toggle">
  <div class="content-wrapper" ref="contentWrapper" v-show="visible">
    <slot name="content"></slot>
  </div>
  <div class="triggerWrapper" ref="triggerWrapper">
    <slot></slot>
  </div>
 </div>
</template>

<script>
export default {
  name: "GuluPopover",
  data(){
    return { visible: false}
  },
  methods: {
    positionContent(){
      document.body.appendChild(this.$refs.contentWrapper)
      let {top,left} = this.$refs.triggerWrapper.getBoundingClientRect()
      this.$refs.contentWrapper.style.left = left + window.scrollX +'px'
      this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
    },
    listenToDocument(){
      let eventHandler = (e) => {
        if(this.$refs.contentWrapper.contains(e.target)){
          // 什么都不做 但是会向上冒泡
        }else{
          this.visible = false
          document.removeEventListener('click',eventHandler)
        }
      }
      document.addEventListener('click',eventHandler)
    },
    toggle(event){
      this.visible = !this.visible
      if(this.visible){
        this.positionContent()
        // 在事件冒泡之后再在document上添加监听
        // 我也不知道这里为啥不能用nextTick() ???
        setTimeout(()=>{
          this.listenToDocument()
        })
        // this.$nextTick(()=>{
        //   this.listenToDocument()
        // })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}
.content-wrapper {
  border: 1px solid #ddd;
  padding: 20px;
  background:white;
  border-radius: 5px;
  position: absolute;
  transform: translateY(-100%); // 防止遮住trigger button
  width: 300px;
}
</style>