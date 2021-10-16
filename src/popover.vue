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
    clickDom(e){
      if(!this.$refs.contentWrapper.contains(e.target)){
        this.close()
      }
    },
    open(){
      this.visible = true
      this.positionContent()
       // 在事件冒泡之后再在document上添加监听
        setTimeout(()=>{
          document.addEventListener('click',this.clickDom) // 点击的时候再添加监听 节省内存
        })

        // 我也不知道这里为啥不能用nextTick() ???
        // this.$nextTick(()=>{
        //   document.addEventListener('click',this.clickDom)
        // })
    },
    close(){
      this.visible = false
      document.removeEventListener('click',this.clickDom)
    },
    toggle(event){
      if(this.visible){
        this.close()
      }else{
        this.open()
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