import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)

import Input from '@/components/input'
import {mount} from '@vue/test-utils'

describe('Input组件: ', () => {

  it('存在.', () => {
    expect(Input).to.exist
  })


  describe('props', () => {
    it('接收 value', () => {
      const wrapper = mount(Input,{
        propsData: {
          value: '1234'
        }
      })
      const vm = wrapper.vm
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.value).to.equal('1234')
    })

    it('接收 disabled', () => {
      const vm = mount(Input,{
        propsData: {
          disabled: true
        }
      }).vm
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.disabled).to.equal(true)
    })
    it('接收 readonly', () => {
      const wrapper = mount(Input,{
        propsData: {
          readonly: true
        }
      })
      expect(wrapper.find('input').attributes().readonly).to.equal('readonly')
    })

    it('接收 error', () => {
      const wrapper = mount(Input,{
        propsData: {
          error: '你错了'
        }
      })
      expect(wrapper.find('use').attributes().href).to.equal('#icon-error')
      expect(wrapper.find('.errorMessage').text()).to.equal('你错了')
    })
  })
  describe('事件', () => {
    it('支持 change/input/focus/blur 事件', () => {
      ['change','input','focus','blur']
        .forEach((eventName) => {
          const vm = mount(Input,{}).vm 
          const callback = sinon.fake();
          vm.$on(eventName, callback)
          //触发input的change 事件
          let event = new Event(eventName);
          Object.defineProperty(
            event, 'target', {
              value: {value: 'hi'}, 
              enumerable: true
            }
          )
          let inputElement = vm.$el.querySelector('input')
          inputElement.dispatchEvent(event)
          expect(callback).to.have.been.calledWith('hi')
        })
    })
  })
})