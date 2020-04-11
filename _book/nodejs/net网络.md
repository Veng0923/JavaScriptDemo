# net网络

`net`模块可用于创建Socket服务器或Socket客户端.

---

### 服务器

创建服务器，并向客户端发送 hello world。

```js
const net = require("net");

const netServer = net.createServer(connection=>{
    connection.write('hello world');
});
netServer.listen(8888);
```

监听8888 端口.

---

### 客户端

```js
const net = require("net");

const options = {
    port: 8888,
};
const netClient = net.connect(options);
netClient.on("data",data=>{
    console.log(data.toString());
    netClient.end();
});
```

向 8888 建立连接，读取数据，然后断开链接。