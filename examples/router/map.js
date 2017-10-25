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
    path: '/icomoon',
    meta: {
      title: '图标字体'
    },
    component: (resolve) => {
      require(['views/icomoonDemo'], resolve)
    }
  }
]
