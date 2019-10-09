# os-操作系统

`os`模块提供了操作系统相关的实用方法。

引入`os`模块:

```js
const os = require("os");
```

### os.EOL

获取系统的换行符：

```js
const eol = os.EOL;
console.log(`!!${eol}!!`);
```

输出：

```shell
!!
!!
```



---

### os.cpus()

返回一个对象数组，包含了cpu内核的信息。

如：

```js
const cpus = os.cpus();
```

我的机子是6核的，所以大小为数组大小为6。

```shell
[ { model: 'Intel(R) Core(TM) i5-8500 CPU @ 3.00GHz',
    speed: 1270,
    times:
     { user: 2106200, nice: 37300, sys: 492100, idle: 28660300, irq: 0 } },
  { model: 'Intel(R) Core(TM) i5-8500 CPU @ 3.00GHz',
    speed: 2060,
    times:
     { user: 2278600, nice: 81800, sys: 554800, idle: 28106700, irq: 0 } },
  { model: 'Intel(R) Core(TM) i5-8500 CPU @ 3.00GHz',
    speed: 1244,
    times:
     { user: 2144000, nice: 65800, sys: 477800, idle: 28601000, irq: 0 } },
  { model: 'Intel(R) Core(TM) i5-8500 CPU @ 3.00GHz',
    speed: 1142,
    times:
     { user: 2099000, nice: 13400, sys: 484800, idle: 28689800, irq: 0 } },
  { model: 'Intel(R) Core(TM) i5-8500 CPU @ 3.00GHz',
    speed: 943,
    times:
     { user: 2033100, nice: 27500, sys: 462400, idle: 28703800, irq: 0 } },
  { model: 'Intel(R) Core(TM) i5-8500 CPU @ 3.00GHz',
    speed: 1578,
    times:
     { user: 2095400, nice: 20400, sys: 524100, idle: 28600800, irq: 0 } } ]
```

---

### os.freemem()

以整数的形式返回空闲系统内存的字节数。

```js
const freemem = os.freemem(); // => 538521600
```

---

### os.totalmem()

以整数的形式返回系统内存总量的字节数。

```js
const totalmem = os.totalmem(); // =>8178692096
```



---

### os.getPriority([pid])

返回由pid指定的进程的调度优先级。如果pid未指定或者等于0，那么返回当前进程的优先级。

```js
const priority = os.getPriority(); // => 0
```

---

### os.setPriority([pid,]priority)

为pid进程设置调度优先级。pid默认是0，即当前进程。priority输入的范围为-20（高优先级)和19（低优先级）之间的整数。由于 Unix 优先级和 Windows 优先级之间的差异， `priority` 会被映射到 `os.constants.priority` 中的六个优先级常量之一。 当检索进程优先级时，此范围的映射可能导致 Windows 上的返回值略有不同。 为避免混淆，建议将 `priority` 设置为其中一个优先级常量。

`os.constants`返回操作系统特定常量的对象,其中就有进程优先级数的常量。有以下常量：

```shell
{
  "PRIORITY_LOW": 19,
  "PRIORITY_BELOW_NORMAL": 10,
  "PRIORITY_NORMAL": 0,
  "PRIORITY_ABOVE_NORMAL": -7,
  "PRIORITY_HIGH": -14,
  "PRIORITY_HIGHEST": -20
}
```



---

### os.homedir()

返回当前用户的主目录。

```js
const homedir = os.homedir(); // => "/home/veng"
```

---

### os.tmpdir()

返回操作系统的默认临时文件目录。

```js
const tmpdir = os.tmpdir(); // => "/tmp"
```



---

### os.hostname()

返回操作系统的主机名。

```js
const hostname = os.hostname(); // => "veng-OptiPlex-3060"
```

---

### os.networkInterfaces()

返回本机的网络地址的信息。

```js
const networkInterfaces = os.networkInterfaces();
```

```shell
{
  "lo": [
    {
      "address": "127.0.0.1",
      "netmask": "255.0.0.0",
      "family": "IPv4",
      "mac": "00:00:00:00:00:00",
      "internal": true,
      "cidr": "127.0.0.1/8"
    },
    {
      "address": "::1",
      "netmask": "ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff",
      "family": "IPv6",
      "mac": "00:00:00:00:00:00",
      "scopeid": 0,
      "internal": true,
      "cidr": "::1/128"
    }
  ],
  "enp1s0": [
    {
      "address": "10.18.139.173",
      "netmask": "255.255.255.0",
      "family": "IPv4",
      "mac": "e4:54:e8:9a:49:00",
      "internal": false,
      "cidr": "10.18.139.173/24"
    },
    {
      "address": "2001:620::4d4d:dfff:d0b8:1fef",
      "netmask": "ffff:ffff:ffff:ffff::",
      "family": "IPv6",
      "mac": "e4:54:e8:9a:49:00",
      "scopeid": 0,
      "internal": false,
      "cidr": "2001:620::4d4d:dfff:d0b8:1fef/64"
    },
    {
      "address": "2001:620::e05a:79a1:ab1e:b4f2",
      "netmask": "ffff:ffff:ffff:ffff::",
      "family": "IPv6",
      "mac": "e4:54:e8:9a:49:00",
      "scopeid": 0,
      "internal": false,
      "cidr": "2001:620::e05a:79a1:ab1e:b4f2/64"
    },
    {
      "address": "fe80::dfa:f782:df3f:bc03",
      "netmask": "ffff:ffff:ffff:ffff::",
      "family": "IPv6",
      "mac": "e4:54:e8:9a:49:00",
      "scopeid": 2,
      "internal": false,
      "cidr": "fe80::dfa:f782:df3f:bc03/64"
    }
  ]
}
```

---

### os.platform()

返回node.js编译时的操作系统平台。

```js
const platform = os.platform(); // => "linux"
```

