<template>
  <div class="row" :class="rowClass">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'GuluRow',
    props: {
      gutter: {
        type: [Number, String]
      },
      align: {
        type: String,
        validator (value) {
          return ['left', 'right', 'center','between'].includes(value)
        }
      }
    },
    computed: {
      rowClass () {
        let {align} = this
        return [align && `align-${align}`]
      }
    },
    mounted () {
      // 将gutter传给子组件  为什么放在mouted里？
      // 因为这个时候 子组件已经mounted了
      this.$children.forEach((vm) => {
        vm.gutter = this.gutter
      })
    }
  }
</script>
<style scoped lang="scss">
  .row{
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10px;
    &.align-left {
      justify-content: flex-start;
    }
    &.align-right {
      justify-content: flex-end;
    }
    &.align-center {
      justify-content: center;
    }
    &.align-between {
      justify-content: space-between;
    }
  }
</style>