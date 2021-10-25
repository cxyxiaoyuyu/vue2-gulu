import Vue from 'vue'
import Row from '@/components/row'
import Col from '@/components/col'

import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)

import { mount } from '@vue/test-utils'

describe('Row', () => {

  it('存在.', () => {
    expect(Row).to.exist
  })
  xit('接收 gutter 属性.', () => {
  })
  xit('接收 align 属性', () => {
    const wrapper = mount(Row,{
      propsData: {
        align: 'right'
      }
    })

    const vm = wrapper.vm
    const element = vm.$el
    expect(getComputedStyle(element).justifyContent).to.equal('flex-end')
    div.remove()
    vm.$destroy()
  })

})
