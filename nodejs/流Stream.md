# 流Stream

类比与java的流，有输入流 ReadStream，输出流 WriteStream.

流的出现是因为担心文件太大，通过流可以一点一点加载数据。



---

### 输入流

读取文件的流，可以看成插入一个管子，然后在读取文件通过管子读取。

如：

```js
const fs = require("fs");

const readStream = fs.createReadStream(`test`);

readStream.on("data",chunk=>{
    console.log(chunk.toString());
});
readStream.on('end',()=>{
    console.log(`读取完毕`);
});

readStream.on('error',error=>{
    console.log(error);
});
/*
3232323232
读取完毕
*/
```

`readStream`就是获取的流，然后可以对增加监听事件，`data`事件，读取过程，`chunk`表示读取的数据。

---

### 输出流

写入文件流，类比输入流。

例子：

```js
const fs = require(`fs`);

const writeStream = fs.createWriteStream('write-file');
writeStream.write('xxxx');
writeStream.end();

writeStream.on("data",chunk=>{
    console.log(chunk.toString());
});

writeStream.on("end",()=>{
    console.log(`写入完毕!`);
});

writeStream.on("error",error=>{
    console.log(error);
});
```

### pipe

就像可以把两个水管串成一个更长的水管一样，两个流也可以串起来。一个`Readable`流和一个`Writable`流串起来后，所有的数据自动从`Readable`流进入`Writable`流，这种操作叫`pipe`。

在Node.js中，`Readable`流有一个`pipe()`方法，就是用来干这件事的。

#### 复制文件

利用`pipe`,我们可以复制文件，如：

```js
const fs = require("fs");

const readStream = fs.createReadStream("test");
const writeStream = fs.createWriteStream("copied");

readStream.pipe(writeStream);
```

这样就可以把 `test`文件复制到`copied`文件,可以想象成，输入流的数据通过管道流向输出流，写入文件。

