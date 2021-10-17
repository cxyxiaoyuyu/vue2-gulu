<template>
 <div class="popover">
  <div class="content-wrapper" ref="contentWrapper" v-show="visible" :class="{[`position-${position}`]:true}">
    <slot name="content" :close=close></slot>
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
  props: {
    position: {
      type: String,
      default: 'top',
      validator(value){
        return ['top','bottom','left','right'].indexOf(value) >= 0
      }
    },
    trigger: {
      type: String,
      default: 'click',
      validator(value){
        return ['click','hover'].indexOf(value) >= 0
      }
    }
  },
  mounted(){
    if(this.trigger === 'click'){
      this.$refs.triggerWrapper.addEventListener('click',this.toggle)
    }else{
      this.$refs.triggerWrapper.addEventListener('mouseenter',this.open)
      this.$refs.triggerWrapper.addEventListener('mouseleave',this.close)
    }
  },
  computed: {
    openEvent(){
      if(this.trigger === 'click') {
        return 'click'
      }else {
        return 'mouseenter'
      }    
    },
    closeEvent(){
      if(this.trigger === 'click') {
        return 'click'
      }else {
        return 'mouseleave'
      }    
    }
  },
  methods: {
    positionContent(){
      document.body.appendChild(this.$refs.contentWrapper)
      let {top,left,height,width} = this.$refs.triggerWrapper.getBoundingClientRect()
      
      if(this.position === 'top'){
        this.$refs.contentWrapper.style.left = left + window.scrollX +'px'
        this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
      }else if(this.position === 'bottom'){
        this.$refs.contentWrapper.style.left = left + window.scrollX +'px'
        this.$refs.contentWrapper.style.top = top + window.scrollY + height + 'px'
      }else if(this.position === 'left'){
        // 与按钮居中对齐 向上移与按钮高度差的一般
        this.$refs.contentWrapper.style.left = left + window.scrollX +'px'
        // 不知道为啥这里的高度需要延时获取 ？？？
        setTimeout(() => {
          let contentHeight = this.$refs.contentWrapper.offsetHeight
          this.$refs.contentWrapper.style.top = top + window.scrollY - (contentHeight - height) / 2 + 'px'
        })
      }else{
        // 与按钮居中对齐 向上移与按钮高度差的一般
        this.$refs.contentWrapper.style.left = left + width + window.scrollX +'px'
        // 不知道为啥这里的高度需要延时获取 ？？？
        setTimeout(() => {
          let contentHeight = this.$refs.contentWrapper.offsetHeight
          this.$refs.contentWrapper.style.top = top + window.scrollY - (contentHeight - height) / 2 + 'px'
        })
      }
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
  border: 1px solid #999;
  padding: 8px 16px;
  background:white;
  border-radius: 5px;
  position: absolute;
  max-width: 300px;
  word-break: break-all;
  filter: drop-shadow(0 0 3px #999);
  ::before,::after {
    width: 0;
    height: 0;
    content: '';
    display: block;
    border: 10px solid transparent;
    left: 10px;
    position: absolute;
  }
  &.position-top {
    margin-top: -10px;
    transform: translateY(-100%); // 防止遮住trigger button
    ::before,::after {
      left: 10px;
    }
    ::before {
      border-top-color: #999;
      border-bottom: none;
      top: 100%;
    }
    ::after {
      border-top-color: white;
      border-bottom: none;
      top: calc(100% - 1px);
    }
  }
  &.position-bottom {
    margin-top: 10px;
    ::before,::after {
      left: 10px;
    }
    ::before {
      border-bottom-color: #999;
      border-top: none;
      bottom: 100%;
    }
    ::after {
      border-bottom-color: white;
      border-top: none;
      bottom: calc(100% - 1px);
    }
  }
  &.position-left {
    transform: translateX(-100%); // 防止遮住trigger button
    margin-left: -10px;
    ::before,::after {
      transform: translateY(-50%);
      top: 50%;
    }
    ::before {
      border-left-color: #999;
      border-right: none;
      left: 100%;
    }
    ::after {
      border-left-color: white;
      left: calc(100% - 1px);
    }
  }  
  &.position-right {
    margin-left: 10px;
    ::before,::after {
      transform: translateY(-50%);
      top: 50%;
    }
    ::before {
      border-right-color: #999;
      left: -20px;  // 不知道为啥right定位无效 ？？？
    }
    ::after {
      border-right-color: white;
      left: -19px;  // right 定位无效 ？？？
    }
  }  
}
</style>