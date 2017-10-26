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
    path: '/loading',
    meta: {
      title: '加载'
    },
    component: (resolve) => {
      require(['views/loading'], resolve)
    }
  }
]
