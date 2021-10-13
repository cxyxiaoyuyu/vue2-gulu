import Vue from 'vue'

import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'

import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Content from './content'
import Footer from './footer'

import plugin from './plugin'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('button-group',ButtonGroup)
Vue.component('g-input',Input)
Vue.component('g-row',Row)
Vue.component('g-col',Col)

Vue.component('g-layout',Layout)
Vue.component('g-header',Header)
Vue.component('g-sider',Sider)
Vue.component('g-content',Content)
Vue.component('g-footer',Footer)

Vue.use(plugin)

new Vue({
  el: '#app',
  data: {
    loading1: true,
    loading2: false,
    loading3: true,
    loading4: true,
    message: 1
  },
  methods: {
    changeInput(e) {
      console.log(e)
    },
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
        autoClose: 3,  
      })
    }
  }
})


