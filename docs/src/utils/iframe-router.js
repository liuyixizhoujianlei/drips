import isMobile from './is-mobile'

window.syncPath = () => {
  const router = window.vueRouter
  const isInframe = window !== window.top
  const currentPath = router.currentRoute.path
  const iframe = document.querySelector('iframe')

  if (!isInframe && !isMobile && iframe) {
    iframeReady(iframe, () => {
      iframe.contentWindow.changePath(currentPath)
    })
  }
}

window.changePath = (path = '') => {
  window.vueRouter.replace(path)
}

function iframeReady(iframe, callback) {
  const doc = iframe.contentDocument || iframe.contentWindow.document
  const interval = () => {
    if (iframe.contentWindow.changePath) {
      callback()
    } else {
      setTimeout(() => {
        interval()
      }, 50)
    }
  }

  if (doc.readyState === 'complete') {
    interval()
  } else {
    iframe.onload = () => {
      interval()
      iframe.onload = null
    }
  }
}
