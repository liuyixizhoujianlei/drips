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
  },
  {
    path: '/icomoon',
    meta: {
      title: '图标字体'
    },
    component: (resolve) => {
      require(['views/icomoonDemo'], resolve)
    }
  }
]
