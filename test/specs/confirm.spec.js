import { createLocalVue } from '@vue/test-utils'
import Confirm from 'packages/confirm'

describe('confirm', () => {
  afterEach(() => {
    Confirm.close()
  })

  it('create a alert', (done) => {
    Confirm.alert({
      title: 'title1',
      message: 'message1'
    }).then(action => {
      expect(action).to.equal('confirm')
      done()
    })

    setTimeout(() => {
      expect(document.querySelector('.drip-confirm')).to.exist
      expect(document.querySelector('.drip-confirm__cancel').style.display).to.equal('none')
      document.querySelector('.drip-confirm__confirm').click()
    }, 300)
  })

  it('create a no-title alert', (done) => {
    Confirm.alert({
      message: 'message2'
    }).then(action => {
      expect(action).to.equal('confirm')
      done()
    })

    setTimeout(() => {
      expect(document.querySelector('.drip-confirm__header')).to.be.null
      document.querySelector('.drip-confirm__confirm').click()
    }, 300)
  })

  it('create a confirm', (done) => {
    Confirm({
      title: 'title3',
      message: 'message3'
    }).catch(action => {
      expect(action).to.equal('cancel')
      done()
    })

    setTimeout(() => {
      expect(document.querySelector('.drip-confirm')).to.exist
      document.querySelector('.drip-confirm__cancel').click()
    }, 300)
  })

  it('register component', () => {
    const localVue = createLocalVue()
    localVue.use(Confirm)

    expect(localVue.Confirm).to.exist
    expect(localVue.prototype.$confirm).to.exist
    expect(localVue.Alert).to.exist
    expect(localVue.prototype.$alert).to.exist
  })
})
