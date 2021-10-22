<template>
 <div class="cascaderItem">
  {{sourceItem.name}}
  <template v-if="sourceItem.children">
    <cascader-item v-for="item in sourceItem.children" :key="item.id"></cascader-item> 
  </template>
 </div>
</template>

<script>
export default {
  name: 'cascaderItem',
  props: {
    sourceItem: {
      type: Object
    }
  },

}
</script>

<style lang="scss" scoped>
.cascaderItem {
  border: 1px solid red;
  margin: 10px;
}
</style>