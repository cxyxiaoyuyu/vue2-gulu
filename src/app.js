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

import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsBody from './tabs-body'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'

import Popover from './popover'

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

Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)

Vue.component('g-popover',Popover)
new Vue({
  el: "#app",
  data(){
    return {
      loading1: true,
      loading2: false,
      loading3: true,
      loading4: true,
      message: 1,
      selectedTab: 'sports',
    }
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
        autoClose: false,  
      })
    }
  }
})


