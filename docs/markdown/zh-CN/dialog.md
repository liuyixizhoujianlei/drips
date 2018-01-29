## Dialog 弹出层

### 使用指南

``` javascript
import { Dialog } from 'drips'

// 全局使用
Vue.use(Dialog)

// 组件内使用
export default {
  components: {
    [Dialog.name]: Dialog
  }
}
```

### 代码演示

#### 基础用法

`dialog`默认从中间弹出

```html
<drip-dialog v-model="show">内容</drip-dialog>
```

```javascript
export default {
  data() {
    return {
      show: false
    }
  }
}
```

#### 弹出位置

通过`position`属性设置 Dialog 弹出位置

```html
<drip-dialog v-model="show" position="top" :overlay="false">
  内容
</drip-dialog>
```

### API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| v-model | 当前组件是否显示 | `Boolean` | `false` | - |
| overlay | 是否显示背景蒙层 | `Boolean` | `true` | - |
| lock-on-scroll | 背景是否跟随滚动 | `Boolean` | `false` | - |
| position | Dialog 位置 | `String` | - | `top` `bottom` `right` `left` |
| overlay-class | 自定义蒙层 class | `String` | `` | - |
| overlay-style | 自定义蒙层样式 | `Object` | `` | - |
| close-on-click-overlay | 点击蒙层是否关闭 Dialog | `Boolean` | `true` | - |
| transition | transition 名称 | `String` | `dialog-slide` | - |
| prevent-scroll | 是否防止滚动穿透 | `Boolean` | `false` | - |
