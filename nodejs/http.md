# http

Node.js 提供了 `http` 模块，`http` 模块主要用于搭建 HTTP 服务端和客户端，使用 HTTP 服务器或客户端功能必须调用 `http` 模块.

---

### 服务器

创建服务器，并响应 hello world。

```js
const http = require("http");

http.createServer((request,response)=>{
    response.end("hello world");
}).listen(9999);
```

此时，可以访问 http://localhost:9999,会打印 hello world.

显然，request包含了请求，response代表响应，

request里有请求的方式，请求的头部，参数等等内容。

---

### 发起请求

像服务器发起请求，并获取数据。

```js
const http = require("http");

const option = {
    hostname: `www.baidu.com`,
    port: 80,
    method: `get`,
};
const request = http.request(option,response=>{
    response.on('data',chunk=>{
        console.log(chunk.toString());
    });
});
request.end();
```

上面就是访问百度，然后将百度首页html代码打印下来。

