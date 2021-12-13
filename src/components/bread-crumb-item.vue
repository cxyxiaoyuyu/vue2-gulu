<template>
  <div :class="['bread-crumb-item',{'is-link': to.path}]" @click="toPath">
    <slot></slot>
    <span class="seprator">{{seprator}}</span>
  </div>
</template>

<script>
export default {
  props: {
    to: Object
  },
  data(){
    return {}
  },
  computed: {
    seprator(){
      return this.$parent.seprator 
    } 
  },
  methods: {
    toPath(){
      console.log(this.to) 
    } 
  }
};
</script>

<style lang="scss">
.bread-crumb-item.is-link {
  cursor: pointer; 
  color: #333;
}
.seprator {
  padding: 0 15px;
}
</style>