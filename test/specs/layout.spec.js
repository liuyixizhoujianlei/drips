import { mount } from '@vue/test-utils'
import Row from 'packages/row'
import Col from 'packages/col'
import LayoutTestComponent from '../components/layout'

describe('Layout', () => {
  let wrapper
  afterEach(() => {
    wrapper && wrapper.destroy()
  })

  it('create a simple row', () => {
    wrapper = mount(Row)

    expect(wrapper.classes()).to.include('drip-row')
    expect(wrapper.vm.style).to.be.empty
  })

  it('create a simple column', () => {
    wrapper = mount(Col, {
      propsData: {
        span: 8,
        offset: 8
      }
    })

    expect(wrapper.classes()).to.include('drip-col')
    expect(wrapper.classes()).to.include('drip-col-8')
    expect(wrapper.classes()).to.include('drip-col-offset-8')
    expect(wrapper.vm.style).to.be.empty
  })

  it('create a gutter layout', () => {
    wrapper = mount(LayoutTestComponent)

    const row = wrapper.find(Row)
    const col = wrapper.find(Col)

    expect(row.element.style.marginLeft).to.equal('-5px')
    expect(row.element.style.marginRight).to.equal('-5px')
    expect(col.element.style.paddingLeft).to.equal('5px')
    expect(col.element.style.paddingRight).to.equal('5px')
  })
})
