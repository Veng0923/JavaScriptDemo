# zlib压缩解压缩

`zlib`模块提供了数据压缩和解压的功能。

### 压缩文件

例子，压缩一张图片：

```js
const zlib = require('zlib');
const fs = require("fs");

const zip = zlib.createGzip();

const reader = fs.createReadStream('asuna.jpg');
const output = fs.createWriteStream(`asuna.zip`);

reader.pipe(zip).pipe(output);
```

### 解压缩

```js
const fs = require('fs');
const zlib = require("zlib");

const gunzip = zlib.createGunzip();

const reader = fs.createReadStream('asuna.zip');
const output = fs.createWriteStream(`asuna-gunzip.jpg`);

reader.pipe(gunzip).pipe(output);
```

