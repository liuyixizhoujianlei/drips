import { mount } from '@vue/test-utils'
import Icon from 'packages/icon'

describe('icon', () => {
  let wrapper
  afterEach(() => {
    wrapper && wrapper.destroy()
  })

  it('create a icon', () => {
    wrapper = mount(Icon, {
      propsData: {
        name: 'arrow'
      }
    })

    expect(wrapper.classes()).to.include('drip-icon')
    expect(wrapper.classes()).to.include('drip-icon-arrow')
  })
})
