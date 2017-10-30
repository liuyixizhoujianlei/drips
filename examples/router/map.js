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
    path: '/confirm',
    meta: {
      title: '对话框'
    },
    component: (resolve) => {
      require(['views/confirm'], resolve)
    }
  },
  {
    path: '/toast',
    meta: {
      title: '对话框'
    },
    component: (resolve) => {
      require(['views/toast'], resolve)
    }
  }
]
