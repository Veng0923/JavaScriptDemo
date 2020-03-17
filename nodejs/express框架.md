# express框架

Express 是一个简洁而灵活的 node.js Web应用框架, 提供了一系列强大特性帮助你创建各种 Web 应用，和丰富的 HTTP 工具。

使用 Express 可以快速地搭建一个完整功能的网站。

---

### 安装

```shell
npm install express --save
```

---

### 服务器

同样的构建一个服务器，并响应 hello world。

```js
const express = require('express');

const app = express();
app.get(`/`,(request,response)=>{
    response.send(`hello world!`);
});
app.listen(8888,()=>{
    console.log(`listen 8888`);
});
```

此时访问 http://localhost:8888

`app.get()`,代表服务器接受get请求。里面参数是监听路径，以及回调。

同样的如果是post请求，就可以使用` app.post()`方法.其他http请求方式也同理。

---

### restful风格

变量隐含在路径中。

```js
const express = require('express');
const app = express();

app.post('/:id',(request,response)=>{
    const params = request.params;
    response.send(params);
}).listen(8888);
```

访问:http://localhost:8888/1, 

<font color=red>注意</font>:请求方式post.

返回：

```json
{
    "id": "1"
}
```

获取URL的查询参数串：

```js
const express = require('express');
const app = express();

app.post('/:id',(request,response)=>{
    const params = request.params;
    const query = request.query;
    const responseContent = {
        params,
        query,
    };
    response.send(responseContent);
}).listen(8888);
```

此时访问：http://localhost:8888/1?name=veng

返回：

```json
{
    "params": {
        "id": "1"
    },
    "query": {
        "name": "veng"
    }
}
```

但是这种只能获取 URL中的参数，表单参数好像不能获取。

---

#### 路由

比如对user增删改查放在一起。

UserController.js：

```js
const express = require("express");
const router = express.Router();

router
    .get('/:id', (request, response) => {
        const params = request.params;
        const id = params.id;
        response.send(`获取用户${id}`);
    })
    .post("/:id", (request, response) => {
        const params = request.params;
        const id = params.id;
        response.send(`增加用户${id}`);
    })
    .delete("/:id", (request, response) => {
        const params = request.params;
        const id = params.id;
        response.send(`删除用户${id}`);
    })
    .put('/:id',(request,response)=>{
        const params = request.params;
        const id = params.id;
        response.send(`修改用户${id}`);
    });

module.exports = router;
```

main.js:

```js
const user = require("./UserController");
const express = require('express');
const app = express();

app.use('/user',user);
app.listen(8080);
```

分别用get，post，put，delete方式访问http://localhost:8080/user/1.

