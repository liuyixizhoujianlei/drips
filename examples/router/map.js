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
    path: '/loading',
    meta: {
      title: '加载'
    },
    component: (resolve) => {
      require(['views/loading'], resolve)
    }
  },
  {
    path: '/components/button',
    meta: {
      title: '按钮'
    },
    component: (resolve) => {
      require(['views/button'], resolve)
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
    path: '/checkbox',
    meta: {
      title: '复选'
    },
    component: (resolve) => {
      require(['views/checkbox'], resolve)
    }
  }
]
