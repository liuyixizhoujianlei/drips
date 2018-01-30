## Confirm 弹出层

### 使用指南

```javascript
import { Confirm } from 'drips'

// 全局使用，推荐
Vue.use(Confirm)

// 以上引用后会在Vue上挂载Confirm方法，在 Vue 的 prototype 上挂载 $confirm 方法
```

### 代码演示
以下展示都是在组件内的使用，非组件内使用请使用`Vue.Confirm`替换`this.$confirm`

#### 消息确认
用于确认消息，包含取消和确认按钮

```javascript
this.$confirm({
  title: '标题',
  message: '弹窗内容'
}).then(() => {
  // on confirm
}).catch(() => {
  // on cancel
})
```


#### 消息提示
用于提示一些消息，只包含一个确认按钮

```javascript
this.$confirm.alert({
  title: '标题',
  message: '弹窗内容'
}).then(() => {
  // on close
})

this.$confirm.alert({
  message: '弹窗内容'
}).then(() => {
  // on close
})
```

### 方法

| 方法名 | 参数 | 返回值 | 介绍 |
|---------|---------|---------|---------|
| Confirm         | `options | message` | `Promise` | 展示消息确认弹窗 |
| Confirm.alert   | `options | message` | `Promise` | 展示消息提示弹窗 |
| Confirm.close   | -                   | `void`        | 关闭弹窗 |

### Options

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|---------|---------|---------|---------|---------|
| title | 标题 | `String` | - | - |
| message | 内容 | `String` | - | - |
| showConfirmButton | 是否展示确认按钮 | `Boolean` |  `true` | - |
| showCancelButton | 是否展示取消按钮 | `Boolean` |  `false` | - |
| confirmButtonText | 确认按钮的文案 | `String` |  `确认` | - |
| cancelButtonText | 取消按钮的文案 | `String` | `取消` | - |
| overlay | 是否展示蒙层 | `Boolean` | `true` | - |
| closeOnClickOverlay | 点击蒙层时是否关闭弹窗 | `Boolean` | `false` | - |
| lockOnScroll | 是否禁用背景滚动 | `Boolean` | `true` | - |
| reverseButton| 是否反转确认取消按钮 | `Boolean` | `false` | - |
