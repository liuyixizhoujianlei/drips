export default [
  {
    path: '/alert',
    meta: {
      title: '弹窗'
    },
    component: (resolve) => {
      require(['views/alert'], resolve)
    }
  },
  {
    path: '/x-dialog',
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
    }
  }
]
