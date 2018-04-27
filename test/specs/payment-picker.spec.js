import { mount } from '@vue/test-utils'
import PaymentPicker from 'packages/payment-picker'

describe('payment-picker', () => {
  let wrapper
  afterEach(() => {
    wrapper && wrapper.destroy()
  })

  it('create a payment-picker', () => {
    wrapper = mount(PaymentPicker)

    expect(wrapper.classes()).to.include('drip-payment-picker')
    expect(wrapper.find('.other-amount-input').is('input')).to.be.true

    const pickerItems = wrapper.findAll('.drip-payment-picker__list-item')
    const vm = wrapper.vm
    const text = `${vm.amountList[0]}${vm.unit}`

    expect(pickerItems.length).to.equal(vm.amountList.length)
    expect(pickerItems.at(0).text()).to.equal(text)

    expect(wrapper.findAll('.payment-picker-cell').at(vm.selectedIndex).classes()).to.include('selected')
  })

  it('create a no-input payment-picker', (done) => {
    const value = 30
    const amountList = [5, 20, 30, 100, 200, 500, 1000]

    wrapper = mount(PaymentPicker, {
      propsData: {
        value,
        amountList,
        showOtherAmount: false
      }
    })

    expect(wrapper.classes()).to.include('drip-payment-picker')
    expect(wrapper.element.querySelector('.other-amount-input')).to.be.null

    const vm = wrapper.vm
    expect(vm.selectedIndex).to.equal(amountList.indexOf(value))

    vm.$on('input', val => {
      wrapper.setProps({ value: val })
    })

    wrapper.setProps({ value: 10 })
    vm.$nextTick(() => {
      expect(vm.value).to.equal(amountList[vm.defaultIndex])
      done()
    })
  })

  it('pick a price on no-input payment-picker', (done) => {
    const value = 30
    const amountList = [5, 20, 30, 100, 200, 500, 1000]

    wrapper = mount(PaymentPicker, {
      propsData: {
        value,
        amountList,
        showOtherAmount: false
      }
    })

    wrapper.vm.$on('input', val => {
      wrapper.setProps({ value: val })
    })

    const pickedIndex = 4
    wrapper.findAll('.payment-picker-cell').at(pickedIndex).element.click()
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.value).to.equal(amountList[pickedIndex])
      done()
    })
  })

  it('set a price on payment-picker', () => {
    const value = 30
    const amountList = [5, 20, 30, 100, 200, 500, 1000]

    wrapper = mount(PaymentPicker, {
      propsData: {
        value,
        amountList
      }
    })

    wrapper.vm.$on('input', val => {
      wrapper.setProps({ value: val })
    })

    const inputWrapper = wrapper.find('.other-amount-input')

    inputWrapper.trigger('focus')
    expect(wrapper.vm.selectedIndex).to.equal(-1)

    inputWrapper.trigger('blur')
    expect(wrapper.vm.inputing).to.be.false

    inputWrapper.element.value = 50
    inputWrapper.trigger('change')
    expect(wrapper.vm.value).to.equal(50)

    inputWrapper.element.value = amountList[1]
    inputWrapper.trigger('change')
    expect(wrapper.vm.value).to.equal(amountList[1])
    expect(inputWrapper.element.value).to.be.empty
  })
})
