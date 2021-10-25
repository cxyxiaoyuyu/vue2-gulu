import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)

import { mount } from '@vue/test-utils'
import Popover from '@/components/popover'

describe('Popover', () => {

  it('存在.', () => {
    expect(Popover).to.exist
  })

  it('可以设置position.', () => {
    const wrapper = mount(Popover, {
      slots: {
        default: { template: `<button>点我</button>` },
        content: '<div>弹出内容</div>'
      },
      propsData: {
        position: 'bottom'
      }
    })
    wrapper.find('button').trigger('click')
    expect(wrapper.find('.content-wrapper').classes('position-bottom')).to.equal(true)
  })
  it('可以设置 trigger', async () => {
    const wrapper = mount(Popover, {
      slots: {
        default: { template: `<button>点我</button>` },
        content: '<div>弹出内容</div>'
      },
      propsData: {
        position: 'bottom',
        trigger: 'hover'
      }
    })
    expect(wrapper.find('.content-wrapper').isVisible()).to.equal(false)
    await wrapper.find('.triggerWrapper').trigger('mouseenter')
    expect(wrapper.find('.content-wrapper').isVisible()).to.equal(true)
  })
})