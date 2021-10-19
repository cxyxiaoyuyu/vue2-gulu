<template>
  <div>
    <g-button @click="showToast('top')">top</g-button>
    <g-button @click="showToast('middle')">middle</g-button>
    <g-button @click="showToast('bottom')">bottom</g-button>
  </div>
</template>

<script>
import Vue from 'vue'
import Plugin from "../../../src/plugin";
import Button from '../../../src/button.vue'
Vue.use(Plugin)
export default {
  components: {
    'g-button': Button
  },
  methods: {
    showToast(position){
      this.$toast(`这是一个toast提示框`, {
        position,
        enableHtml: false,
        closeButton: {
          text: '好的',
          callback () {
            console.log('我已经知道了')
          }
        },
        autoClose: false,  
      })
    }
  }
};
</script>

    