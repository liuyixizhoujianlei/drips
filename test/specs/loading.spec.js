import { mount } from '@vue/test-utils'
import Loading from 'packages/loading'

describe('icon', () => {
  let wrapper
  afterEach(() => {
    wrapper && wrapper.destroy()
  })

  it('create a default loading', () => {
    wrapper = mount(Loading)

    expect(wrapper.classes()).to.include('drip-loading')
    expect(wrapper.classes()).to.include('drip-loading--gradient-circle')
    expect(wrapper.classes()).to.include('drip-loading--black')
  })

  it('create gradient-circle white loading', () => {
    wrapper = mount(Loading, {
      propsData: {
        type: 'gradient-circle',
        color: 'white'
      }
    })

    expect(wrapper.classes()).to.include('drip-loading--gradient-circle')
    expect(wrapper.classes()).to.include('drip-loading--white')

    const spinner = wrapper.find('.drip-loading__spinner')

    expect(spinner.classes()).to.include('drip-loading__spinner--gradient-circle')
    expect(spinner.classes()).to.include('drip-loading__spinner--white')
  })

  it('create circle loading', () => {
    wrapper = mount(Loading, {
      propsData: {
        type: 'circle'
      }
    })

    expect(wrapper.classes()).to.include('drip-loading--circle')

    const spinner = wrapper.find('.drip-loading__spinner')

    expect(spinner.classes()).to.include('drip-loading__spinner--circle')
  })
})
