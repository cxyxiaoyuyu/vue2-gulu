import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)

import {shallowMount,mount} from '@vue/test-utils'
import Button from '@/components/button'

describe('Button组件: ', () => {
    it('Button存在.', () => {
        expect(Button).to.be.ok
    })
    it('可以设置icon.', () => {
        const wrapper = mount(Button,{
            propsData: {
                icon: 'settings'
            }
        })
        const vm = wrapper.vm
        const useElement = vm.$el.querySelector('use')
        expect(useElement.getAttribute('xlink:href')).to.equal('#icon-settings')
        vm.$destroy()
    })
    it('可以设置loading.', () => {
        const wrapper = mount(Button,{
            propsData: {
                icon: 'setting',
                loading: true
            }
        })
        const vm = wrapper.vm
        const useElements = vm.$el.querySelectorAll('use')
        expect(useElements.length).to.equal(1)
        expect(useElements[0].getAttribute('xlink:href')).to.equal('#icon-loading')
        vm.$destroy()
    })
    xit('icon 默认的 order 是 1', () => {
        const wrapper = mount(Button,{
            propsData: {
                icon: 'setting',
            }
        })
        const vm = wrapper.vm
        // console.log(wrapper.html())
        const icon = vm.$el.querySelector('svg')
        expect(getComputedStyle(icon).order).to.eq('0')
        vm.$el.remove()
        vm.$destroy()
    })
    xit('设置 iconPosition 可以改变 order', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                conName: 'setting',
                iconPosition: 'icon-right'
            }
        }).$mount(div)
        //const icon = vm.$el.querySelector('svg')
        expect(getComputedStyle(vm.$el).flexDirection).to.eq('row-reverse')
        vm.$el.remove()
        vm.$destroy()
    })
    it('点击 button 触发 click 事件', () => {
        const wrapper = mount(Button,{
            propsdata: {
                iconname: 'setting',
            }
        })
        const vm = wrapper.vm
        const callback = sinon.fake();
        vm.$on('click', callback)
        vm.$el.click()
        expect(callback).to.have.been.called
    })
})