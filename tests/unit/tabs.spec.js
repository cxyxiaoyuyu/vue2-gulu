import chai, { expect } from 'chai'
import Vue from 'vue'
import Tabs from '@/components/tabs'
import TabsHead from '@/components/tabs-head'
import TabsBody from '@/components/tabs-body'
import TabsItem from '@/components/tabs-item'
import TabsPane from '@/components/tabs-pane'

import { mount } from '@vue/test-utils'

Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {

  it('存在.', () => {
    expect(Tabs).to.exist
  })

  it('接受 selected 属性', async () => {
    const wrapper = await mount(Tabs, {
      propsData: {
        selected: 'finance'
      },
      slots: {
        default: `<g-tabs-head>
          <g-tabs-item name="woman"> 美女 </g-tabs-item>
          <g-tabs-item name="finance"> 财经 </g-tabs-item>
          <g-tabs-item name="sports"> 体育 </g-tabs-item>
        </g-tabs-head>
        <g-tabs-body>
          <g-tabs-pane name="woman"> 美女相关资讯 </g-tabs-pane>
          <g-tabs-pane name="finance"> 财经相关资讯 </g-tabs-pane>
          <g-tabs-pane name="sports"> 体育相关资讯 </g-tabs-pane>
        </g-tabs-body>`
      }
    })
    expect(wrapper.find(`.tabs-item[data-name="finance"]`).classes('active')).to.be.true
  })

  it('可以接受 direction prop', () => {

  })

})