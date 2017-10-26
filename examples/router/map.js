export default [
  {
    path: '/components/alert',
    meta: {
      title: '弹窗'
    },
    component: (resolve) => {
      require(['views/alert'], resolve)
    }
  },
  {
    path: '/components/x-dialog',
    meta: {
      title: '弹窗'
    },
    component: (resolve) => {
      require(['views/xDialog'], resolve)
    }
  },
  {
    path: '/button',
    meta: {
      title: '按钮'
    },
    component: (resolve) => {
      require(['views/button'], resolve)
  },
  {
    path: '/components/preview',
    meta: {
      title: 'preview'
    },
    component: (resolve) => {
      require(['views/preview'], resolve)
    }
  },
  {
    path: '/directives/transfer-dom',
    meta: {
      title: 'v-transfer-dom'
    },
    component: (resolve) => {
      require(['views/transferDom'], resolve)
    }
  }
]
