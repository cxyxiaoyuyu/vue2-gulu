import Vue from 'vue'

import Button from './button'
import Icon from './icon'

// import ButtonGroup from './button-group'

import Input from './input'

// console.log(Input)

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
// Vue.component('button-group',ButtonGroup)
Vue.component('g-input',Input)

new Vue({
  el: '#app',
  data: {
    loading1: true,
    loading2: false,
    loading3: true,
    loading4: true,
    message: 'Hello Vue'
  },
  methods: {
    changeInput(e) {
      console.log(e)

    }
  }
})


