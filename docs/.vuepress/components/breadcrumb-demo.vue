<template>
  <div>
    <g-bread-crumb seprator=">">
      <g-bread-crumb-item v-for="item in navs" :key="item.name" :to="{path: item.path}">{{item.name}}</g-bread-crumb-item>
    </g-bread-crumb>

    <g-bread-crumb style="margin-top:20px">
      <g-bread-crumb-item :to="{path: '/'}">主页</g-bread-crumb-item>
      <g-bread-crumb-item>用户管理</g-bread-crumb-item>
      <g-bread-crumb-item>用户列表</g-bread-crumb-item>
    </g-bread-crumb>
  </div>
</template>

<script>
import BreadCrumb from "../../../src/components/bread-crumb.vue";
import BreadCrumbItem from "../../../src/components/bread-crumb-item.vue";
export default {
  data(){
    return {
      navs: [
        { name: '主页', path: '/'},
        { name: '用户管理', path: '/user'},
        { name: '用户列表', path: '/user/list'},
      ] 
    }
  },
  components: {
    "g-bread-crumb": BreadCrumb,
    "g-bread-crumb-item": BreadCrumbItem,
  },
};
</script>

<style lang="scss" scoped>

</style>