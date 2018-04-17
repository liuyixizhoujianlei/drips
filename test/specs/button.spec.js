import { mount } from '@vue/test-utils'
import Button from 'packages/button'
import Loading from 'packages/loading'

describe('Button', () => {
  let wrapper
  afterEach(() => {
    wrapper && wrapper.destroy()
  })

  it('create a simple button', () => {
    wrapper = mount(Button)

    expect(wrapper.classes()).to.include('drip-button')
    expect(wrapper.classes()).to.include('drip-button--default')
    expect(wrapper.classes()).to.include('is-normal')

    const eventStub = sinon.stub(wrapper.vm, '$emit')
    wrapper.trigger('click')

    expect(eventStub.calledOnce).to.be.true
    expect(eventStub.calledWith('click')).to.be.true
  })

  it('create a primary button', () => {
    wrapper = mount(Button, {
      propsData: {
        type: 'primary'
      }
    })

    expect(wrapper.classes()).to.include('drip-button')
    expect(wrapper.classes()).to.include('drip-button--primary')
  })

  it('create a plain button', () => {
    wrapper = mount(Button, {
      propsData: {
        type: 'plain'
      }
    })

    expect(wrapper.classes()).to.include('drip-button')
    expect(wrapper.classes()).to.include('drip-button--plain')
  })

  it('create a block button', () => {
    wrapper = mount(Button, {
      propsData: {
        block: true
      }
    })

    expect(wrapper.classes()).to.include('drip-button')
    expect(wrapper.classes()).to.include('is-block')
  })

  it('create a flat button', () => {
    wrapper = mount(Button, {
      propsData: {
        flat: true
      }
    })

    expect(wrapper.classes()).to.include('drip-button')
    expect(wrapper.classes()).to.include('is-flat')
  })

  it('create a disabled button', () => {
    wrapper = mount(Button, {
      propsData: {
        disabled: true
      }
    })

    expect(wrapper.classes()).to.include('drip-button')
    expect(wrapper.classes()).to.include('is-disabled')

    const eventStub = sinon.stub(wrapper.vm, '$emit')
    wrapper.trigger('click')

    expect(eventStub.called).to.be.false
  })

  it('create a loading button', () => {
    wrapper = mount(Button, {
      propsData: {
        loading: true
      }
    })

    const loading = wrapper.find(Loading)
    expect(loading.isVueInstance()).to.be.true

    expect(wrapper.classes()).to.include('drip-button')
    expect(wrapper.classes()).to.include('is-loading')

    const eventStub = sinon.stub(wrapper.vm, '$emit')
    wrapper.trigger('click')

    expect(eventStub.called).to.be.false
  })

  it('create a link button', () => {
    const link = 'https://www.shuidihuzhu.com/'
    wrapper = mount(Button, {
      propsData: {
        tag: 'a',
        href: link
      }
    })

    expect(wrapper.classes()).to.include('drip-button')
    expect(wrapper.contains('a')).to.be.true
    expect(wrapper.props().href).to.equal(link)
  })
})
