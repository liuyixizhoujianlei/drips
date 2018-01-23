## Loading 加载组件

### 使用指南

```javascript
import { Loading } from 'drips'

Vue.use(Loading)
```

### 代码演示

#### 单色圆环

```html
<drip-loading type="circle" color="black" />
<drip-loading type="circle" color="white" />
```

#### 渐变色圆环

```html
<drip-loading type="gradient-circle" color="black" />
<drip-loading type="gradient-circle" color="white" />
```

#### Spinner

```html
<drip-loading type="spinner" color="black" />
<drip-loading type="spinner" color="white" />
```

### API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| color | 颜色 | `String` | `black` | `black` `white` |
| type | 类型 | `String` | `gradient-circle` | `spinner` `circle` |
