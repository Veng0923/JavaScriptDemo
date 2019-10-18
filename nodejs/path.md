# path

`path` 模块提供用于处理文件路径和目录路径的实用工具。 它可以使用以下方式访问：

```js
const path = require('path');
```

---

#### path.basename(path[,ext])

返回path路径的最后一部分，ext为可选的文件扩展名。

```js
path.basename('/foo/bar/baz/asdf/quux.html');
// 返回: 'quux.html'

path.basename('/foo/bar/baz/asdf/quux.html', '.html');
// 返回: 'quux'
```

如果 `path` 不是字符串或者给定了 `ext` 且不是字符串，则抛出 [`TypeError`](http://nodejs.cn/s/Z7Lqyj)。

---

#### path.dirname(path)

跟basename方法恰恰相反，尾部的目录分隔符将被忽略，即返回该路径的父目录。

```js
const parenPath = path.dirname('foo/test');
// foo
```

---

#### path.extname(path)

返回path的扩展名，即文件后缀,如果path没有后缀，则返回空字符串。

```js
const extname = path.extname('foo/t.txt');
// .txt
const extname1 = path.extname('foo/t.tar.gz');
// .gz
const extname2 = path.extname('foo');
// ''
path.extname('index.');
// 返回: '.'
```

---

#### path.isAbsolute(path)

检测path是否为绝对路径。

```js
path.isAbsolute("/foo/bar");
// true
path.isAbsolute("foo");
// false
path.isAbsolute(".")
// false
```

---

#### path.join([...paths])

将paths里的path片段连接到一起，生成规范化的路径

```js
const s = path.join('a','/b','c/','/d/','..');
// a/b/c  其中.. 是返回上一级
```

---

#### path.parse(path)

返回一个对象，其属性表示path的重要元素。尾部的目录分隔符将被忽略。

```js
path.parse('/home/user/dir/file.txt');
// 返回:
// { root: '/',
//   dir: '/home/user/dir',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file' }
```

---

#### path.relative(from,to)

返回  from到to的相对路径。

```js
path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb');
// 返回: '../../impl/bbb'
```

