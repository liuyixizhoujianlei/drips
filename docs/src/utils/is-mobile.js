const isMobile = (function() {
  return navigator.userAgent.match(/AppleWebKit.*Mobile.*/i)
})()

export default isMobile
