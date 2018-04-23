import { createLocalVue } from '@vue/test-utils'
import Toast from 'packages/toast'

describe('toast', () => {
  afterEach(() => {
    Toast.clear()
  })

  it('create a empty toast', (done) => {
    Toast()

    setTimeout(() => {
      expect(document.querySelector('.drip-toast')).to.exist

      done()
    })
  })

  it('create a toast', (done) => {
    const toast = Toast('toast')

    setTimeout(() => {
      expect(document.querySelector('.drip-toast')).to.exist
      expect(toast.message).to.equal('toast')
      expect(toast.type).to.equal('text')
      expect(toast.displayStyle).to.equal('text')
      expect(typeof toast.timer).to.equal('number')

      done()
    })
  })

  it('create a loading toast', (done) => {
    const toast = Toast.loading()

    setTimeout(() => {
      expect(document.querySelector('.drip-toast')).to.exist
      expect(toast.type).to.equal('loading')

      done()
    })
  })

  it('create a options loading toast', (done) => {
    const toast = Toast.loading({
      message: 'toast'
    })

    setTimeout(() => {
      expect(document.querySelector('.drip-toast')).to.exist
      expect(toast.message).to.equal('toast')
      expect(toast.type).to.equal('loading')

      done()
    })
  })

  it('create a success toast', (done) => {
    const toast = Toast.success('success')

    setTimeout(() => {
      expect(document.querySelector('.drip-toast')).to.exist
      expect(toast.displayStyle).to.equal('default')
      expect(toast.type).to.equal('success')

      done()
    })
  })

  it('create a options success toast', (done) => {
    const toast = Toast.success({
      message: 'toast'
    })

    setTimeout(() => {
      expect(document.querySelector('.drip-toast')).to.exist
      expect(toast.message).to.equal('toast')
      expect(toast.type).to.equal('success')

      done()
    })
  })

  it('create a fail toast', (done) => {
    const toast = Toast.fail('fail')

    setTimeout(() => {
      expect(document.querySelector('.drip-toast')).to.exist
      expect(toast.displayStyle).to.equal('default')
      expect(toast.type).to.equal('fail')

      done()
    })
  })

  it('create a options fail toast', (done) => {
    const toast = Toast.fail({
      message: 'toast'
    })

    setTimeout(() => {
      expect(document.querySelector('.drip-toast')).to.exist
      expect(toast.message).to.equal('toast')
      expect(toast.type).to.equal('fail')

      done()
    })
  })

  it('create a forbidClick toast', (done) => {
    Toast({
      message: 'toast2',
      forbidClick: true
    })

    setTimeout(() => {
      expect(document.querySelector('.drip-toast')).to.exist
      expect(document.querySelector('.drip-toast__overlay')).to.exist

      done()
    })
  })

  it('toast disappeared after duration', (done) => {
    const toast = Toast({
      message: 'toast',
      duration: 10
    })

    setTimeout(() => {
      expect(toast.$el.style.display === 'none').to.be.true
      Toast.clear()

      done()
    }, 500)
  })

  it('register component', () => {
    const localVue = createLocalVue()
    localVue.use(Toast)

    expect(localVue.Toast).to.exist
    expect(localVue.prototype.$toast).to.exist
  })
})
