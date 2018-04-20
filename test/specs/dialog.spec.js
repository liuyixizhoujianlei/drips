import { mount } from '@vue/test-utils'
import Dialog from 'packages/dialog'
import { triggerTouch } from '../utils'

describe('dialog', () => {
  let wrapper
  afterEach(() => {
    wrapper && wrapper.destroy()
  })

  it('create a dialog', () => {
    wrapper = mount(Dialog, {
      propsData: {
        position: 'bottom'
      }
    })

    expect(wrapper.classes()).to.include('drip-dialog')
    expect(wrapper.vm.currentTransition).to.equal('dialog-slide-bottom')
  })

  it('create a show dialog', () => {
    wrapper = mount(Dialog, {
      propsData: {
        value: true
      }
    })

    expect(wrapper.element.style.display).to.equal('')
  })

  it('make dialog show', (done) => {
    wrapper = mount(Dialog, {
      propsData: {
        value: false,
        overlay: false,
        lockOnScroll: false
      }
    })

    const eventStub = sinon.stub(wrapper.vm, '$emit')
    expect(wrapper.element.style.display).to.equal('none')

    wrapper.vm.value = true
    wrapper.vm.$nextTick(() => {
      expect(wrapper.element.style.display).to.equal('')
      expect(eventStub.calledWith('input'))
      done()
    })
  })

  it('create a dialog-fade transition dialog', () => {
    wrapper = mount(Dialog, {
      propsData: {
        transition: 'dialog-fade'
      }
    })

    expect(wrapper.classes()).to.include('drip-dialog')
    expect(wrapper.vm.currentTransition).to.equal('dialog-fade')
  })

  it('dialog modal', (done) => {
    wrapper = mount(Dialog, {
      propsData: {
        value: true
      }
    })

    // v-model
    wrapper.vm.$on('input', val => {
      wrapper.vm.value = val
    })

    expect(wrapper.classes()).to.include('drip-dialog')

    setTimeout(() => {
      const modal = document.querySelector('.drip-modal')
      triggerTouch(modal, 'touchstart', 0, 0)
      triggerTouch(modal, 'touchmove', 0, 10)
      triggerTouch(modal, 'touchmove', 0, 30)
      triggerTouch(modal, 'touchmove', 0, -30)
      expect(modal).to.exist

      modal.click()
      setTimeout(() => {
        expect(wrapper.vm.value).to.be.false
        done()
      }, 300)
    }, 300)
  })

  it('dialog prevent scroll', (done) => {
    wrapper = mount(Dialog, {
      propsData: {
        value: true
      }
    })

    expect(wrapper.classes()).to.include('drip-dialog')

    setTimeout(() => {
      triggerTouch(document, 'touchstart', 0, 0)
      triggerTouch(document, 'touchmove', 0, 10)
      triggerTouch(document, 'touchmove', 0, 30)
      triggerTouch(document, 'touchmove', 0, -30)

      expect(wrapper.element.style.display).to.equal('')
      wrapper.vm.value = false

      setTimeout(() => {
        expect(wrapper.element.style.display).to.equal('none')
        done()
      }, 500)
    }, 300)
  })

  it('treat empty string as true for boolean props', () => {
    wrapper = mount(Dialog, {
      propsData: {
        overlay: '',
        lockOnScroll: '',
        closeOnClickOverlay: ''
      }
    })

    expect(wrapper.vm.overlay).to.be.true
    expect(wrapper.vm.lockOnScroll).to.be.true
    expect(wrapper.vm.closeOnClickOverlay).to.be.true
  })

  it('dialog lock scroll', done => {
    wrapper = mount(Dialog, {
      propsData: {
        value: true,
        lockOnScroll: true
      }
    })

    setTimeout(() => {
      expect(document.body.classList.contains('drip-overflow-hidden')).to.be.true
      done()
    }, 50)
  })
})
