# path

`path` 模块提供用于处理文件路径和目录路径的实用工具。 它可以使用以下方式访问：

```js
const path = require('path');
```

---

### path.basename(path[,ext])

返回path路径的最后一部分，ext为可选的文件扩展名。

```js
path.basename('/foo/bar/baz/asdf/quux.html');
// 返回: 'quux.html'

path.basename('/foo/bar/baz/asdf/quux.html', '.html');
// 返回: 'quux'
```

如果 `path` 不是字符串或者给定了 `ext` 且不是字符串，则抛出 [`TypeError`](http://nodejs.cn/s/Z7Lqyj)。

---

