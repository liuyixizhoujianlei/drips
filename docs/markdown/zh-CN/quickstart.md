## 快速上手

### 安装

```shell
npm i drips -S
```

### 引入组件

#### 方式一. 使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) (推荐)
```bash
# 安装 babel-plugin-import 插件
npm i babel-plugin-import -D
```

```js
// 在 .babelrc 或 babel-loader 中添加插件配置
{
  "plugins": [
    ["import", { "libraryName": "drips", "style": true }]
  ]
}
```

接着你可以在代码中直接引入 Drips 组件，插件会自动将代码转化为方式二中的按需引入形式。

```js
import { Button } from 'drips'
```

#### 方式二. 按需引入组件

```js
import { Button } from 'drips/lib/button'
import 'drips/lib/drips-css/base.css'
import 'drips/lib/drips-css/button.css'
```
 
#### 方式三. 导入所有组件

```js
import Vue from 'vue'
import Drips from 'drips'
import 'drips/lib/drips-css/index.css'

Vue.use(Drips)
```

### Props 命名风格
Drips 文档中的 props 默认采用驼峰式命名 (camelCase)。由于 HTML 特性是不区分大小写的，如果在 HTML 中直接书写 Vue 模板，需要使用短横线分割式 (kebab-case) 的命名来传递 props

``` html
<!-- 在 JavaScript 中使用 camelCase -->
<drip-cell isLink />

<!-- 在 HTML 中使用 kebab-case-->
<drip-cell is-link />
```

