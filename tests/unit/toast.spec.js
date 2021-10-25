import Toast from '@/components/toast'
import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)
import { mount } from '@vue/test-utils'

describe('Toast', () => {

  it('存在.', () => {
    expect(Toast).to.exist
  })

  describe('props', function () {
    it('接受 autoClose', () => {
      const wrapper = mount(Toast,{
        propsData: {
          autoClose: true
        }
      })
      const vm = wrapper.vm
      vm.$on('close', () => {
        expect(document.body.contains(vm.$el)).to.eq(false)
      })
    })
    it('接受 closeButton', async() => {
      const callback = sinon.fake()
      const wrapper = await mount(Toast,{
        propsData: {
          closeButton: {
            text: '关闭吧',
            callback,
          },
        }
      })
      const closeButton = wrapper.find('.close')
      expect(closeButton.text()).to.eq('关闭吧')

      closeButton.trigger('click')
      expect(callback).to.have.been.called
    })
    xit('接受 enableHtml', () => {
      const wrapper = mount(Toast,{
        propsData: {enableHtml: true},
        slots: {
          default: '<strong id="test">hi</strong>'
        }
      })
      expect(wrapper.find('#test')).to.exist
    })
    it('接受 position', () => {
      const wrapper = mount(Toast,{
        propsData: {
          position: 'bottom'
        }
      })
      expect(wrapper.classes('position-bottom')).to.be.true
    })
  })

})