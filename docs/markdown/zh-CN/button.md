## Button 按钮

### 使用指南

```javascript
import { Button } from 'drips'

// 全局使用
Vue.use(Button)

// 组件内使用
export default {
  components: {
    [Button.name]: Button
  }
}
```

### 代码演示

#### 按钮类型
支持`default`、`primary`、`plain`三种类型，默认为`default`

```html
<drip-button type="default">默认按钮</drip-button>
<drip-button type="primary">主要按钮</drip-button>
<drip-button type="plain">朴素按钮</drip-button>
```

#### 禁用状态
通过`disabled`属性来禁用按钮，此时按钮不可点击

```html
<drip-button disabled>禁用状态</drip-button>
<drip-button type="primary" disabled>主要按钮</drip-button>
```

#### 加载状态

```html
<drip-button loading />
<drip-button loading type="primary" />
<drip-button loading>加载中</drip-button>
```

#### 平角按钮，常用于底部操作按钮

```html
<drip-button flat>平角默认按钮</drip-button>
<drip-button type="primary" flat>平角主要按钮</drip-button>
```

#### 图标按钮

```html
<drip-button type="default" icon="clock">时钟</drip-button>
<drip-button type="primary" icon="close">关闭</drip-button>
```

#### 自定义按钮标签
按钮标签默认为`button`，可以用`tag`属性来修改

```html
<drip-button tag="a" href="https://www.shuidihuzhu.com/" target="_blank">链接按钮</drip-button>
```

#### API

| 参数| 说明 | 类型 | 默认值 | 可选值 |
|-------------|-----------|-----------|-------------|-------------|
| type          | 按钮类型 | `String` | `default` | `primary` `plain` |
| tag           | 按钮标签 | `String` | `button` | 任意`HTML`标签 |
| native-type   | 按钮类型（原生） | `String` | `''` | - |
| disabled      | 是否禁用 | `Boolean` |  `false` | - |
| loading       | 是否显示为加载状态 | `Boolean` |  `false` | - |
| block         | 是否为块级元素 | `Boolean` |   `false` | - |
| flat          | 是否为平角按钮 | `Boolean` | `false` | - |
