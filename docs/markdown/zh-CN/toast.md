## Toast 轻提示

### 使用指南

```javascript
import { Toast } from 'drips'

// 全局使用，推荐
Vue.use(Toast)

// 以上引用后会在Vue上挂载Toast方法，在 Vue 的 prototype 上挂载 $toast 方法
```

### 代码演示

#### 文字提示
```javascript
Vue.Toast('我是一句简单的文字提示~') 
// 或者
this.$toast('我是一句简单的文字提示~')
```

#### 加载提示

```javascript
Vue.Toast.loading({ mask: true })
// 或者
Vue.Toast({ type: 'loading', mask: true })
```

#### 成功/失败提示

```javascript
Vue.Toast.success('成功文案')
// 或者
Vue.Toast.fail('失败文案')
```

#### 高级用法

```javascript
  const toast = Vue.Toast.loading({
    duration: 0,
    message: '倒计时3s'
  })

  let second = 3
  const timer = setInterval(() => {
    second--
    if (second) {
      toast.message = `倒计时${second}s`
    } else {
      clearInterval(timer)
      Vue.Toast.clear()
    }
  }, 1000)
}
```

### 方法

| 方法名 | 参数 | 返回值 | 介绍 |
|---------|---------|---------|---------|
| Toast         | `options | message` | toast 实例 | 简单提示 |
| Toast.loading | `options | message` | toast 实例 | 加载提示 |
| Toast.success | `options | message` | toast 实例 | 成功提示 |
| Toast.fail    | `options | message` | toast 实例 | 失败提示 |
| Toast.clear   | -                   | `void`    | 关闭提示 |

### Options

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|---------|---------|---------|---------|---------|
| type          | 提示类型 | `String` | `text`     | `loading` `success` `fail` `html` |
| message       | 内容    | `String` | `''`       | -              |
| position      | 位置    | String   | `middle`   | `top` `bottom` |
| mask          | 是否显示背景蒙层 | `Boolean` | `false` | -   |
| forbidClick   | 禁止背景点击    | `Boolean` | `false` | -    |
| duration      | 时长(ms)       | `Number`  | `2500`    | 值为 0 时，toast 不会消失 |
