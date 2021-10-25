import Tabs from '@/components/tabs'
import TabsHead from '@/components/tabs-head'
import TabsBody from '@/components/tabs-body'
import TabsItem from '@/components/tabs-item'
import TabsPane from '@/components/tabs-pane'
import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)

import { mount,config } from '@vue/test-utils'
import Vue from 'vue'

// config.provide.eventBus =  { }



describe('TabsItem', () => {

  it('存在.', () => {
    expect(TabsItem).to.exist
  })

  it('接受 name 属性', () => {
    const wrapper = mount(TabsItem,{
      propsData: {
        name: 'xxx',
      },
    })
    expect(wrapper.attributes('data-name')).to.eq('xxx')
  })
  it('接受 disabled 属性', () => {
    const wrapper = mount(TabsItem,{
      propsData: {
        disabled: true,
        name: 'xxx'
      }
    })
    expect(wrapper.classes('disabled')).to.be.true

    const callback = sinon.fake();
    const vm = wrapper.vm
    vm.$on('click', callback)
    vm.$el.click()

    expect(callback).to.have.not.been.called
  })
})