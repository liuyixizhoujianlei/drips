## PaymentPicker 弹出层

### 使用指南

``` javascript
import { PaymentPicker } from 'drips'

// 全局使用
Vue.use(PaymentPicker)

// 组件内使用
export default {
  components: {
    [PaymentPicker.name]: PaymentPicker
  }
}
```

### 代码演示

#### 基础用法

```html
<drip-payment-picker v-model="paymentAmount"></drip-payment-picker>
```

```js
export default {
  data() {
    return {
      paymentAmount: 20
    }
  }
}
```

#### 高级用法

```html
<drip-payment-picker
  v-model="paymentAmount2"
  :amount-list="amountList"
  :show-other-amount="false"
></drip-payment-picker>
```

```js
export default {
  data() {
    return {
      paymentAmount2: 30,
      paymentList: [5, 20, 30, 100, 200, 500, 100]
    }
  }
}
```

### API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| v-model | 当前选中或填写的金额 | `Number` | 默认10，如列表中不存在，则根据`defaultIndex`参数默认选择一个 | - |
| placeholder | `其他金额`文本提示语 | `String` | `其他金额` | - |
| unit | 价格单位 | `String` | `元` | - |
| amountList | 可选金额列表 | `Array` | `[10, 20, 50, 100, 500, 1000]` | - |
| showOtherAmount | 是否显示其他金额输入框 | `Boolean` | `true` | - |
| defaultIndex | 默认选择金额列表中的第几个，从`0`开始 | `Number` | `0` | - |
