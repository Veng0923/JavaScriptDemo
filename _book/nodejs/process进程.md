# process 进程

`process` 对象是一个全局变量，它提供有关当前 Node.js 进程的信息并对其进行控制。 作为一个全局变量，它始终可供 Node.js 应用程序使用，无需使用 `require()`。 它也可以使用 `require()` 显式地访问：

```js
const process = require('process');
```

### 获取进程信息

```js
const nodePath = process.execPath;
console.log(`node路径:${nodePath}`);

const version = process.version;
console.log(`node版本:${version}`);

const versions = process.versions;
console.log(`依赖库版本:${JSON.stringify(versions)}`);

const platform = process.platform;
console.log(`运行平台:${platform}`);

const title = process.title;
console.log(`窗口标题:${title}`);

const env = process.env;
console.log(`操作系统环境信息:${JSON.stringify(env)}`);

const arch = process.arch;
console.log(`处理器架构:${arch}`);
```

shell,有些文字过长，已省略:

```shell
node路径:/home/veng/environment/nvm/versions/node/v10.15.3/bin/node
node版本:v10.15.3
依赖库版本:{"http_parser":"2.8.0","node":"10.15.3","v8":"6.8.275.32-node.51","uv":"1.23.2","zlib":"1.2.11","ares":"1.15.0","modules":"64","nghttp2":"1.34.0","napi":"3","openssl":"1.1.0j","icu":"62.1","unicode":"11.0","cldr":"33.1","tz":"2018e"}
运行平台:linux
窗口标题:/home/veng/environment/nvm/versions/node/v10.15.3/bin/node
操作系统环境信息:{"PATH":"/home/veng/environment/jdk-8u221-linux-x64/jdk1.8.0_221/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin",...}
处理器架构:x64
```

---

### 接受输入数据

Java中是利用 Scanner类，可以类比。

```js
process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
    let chunk;
    // 使用循环确保我们读取所有的可用数据。
    while ((chunk = process.stdin.read()) !== null) {
        process.stdout.write(`数据: ${chunk}`);
    }
});

process.stdin.on('end', () => {
    process.stdout.write('结束');
});
```

### 查看内存使用情况

`process.memoryUsage()` 方法返回 Node.js 进程的内存使用情况的对象，该对象每个属性值的单位为字节。

```js
const memoryUsage = process.memoryUsage();
console.log(memoryUsage);
```

```shell
{ rss: 31444992,
  heapTotal: 6537216,
  heapUsed: 3968704,
  external: 8272 }
```

`heapTotal` 和 `heapUsed` 代表 V8 的内存使用情况。 `external` 代表 V8 管理的，绑定到 Javascript 的 C++ 对象的内存使用情况。 `rss` 是驻留集大小, 是给这个进程分配了多少物理内存（占总分配内存的一部分），这些物理内存中包含堆、代码段、以及栈。

