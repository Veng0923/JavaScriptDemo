# AJAX

用JavaScript写AJAX前面已经介绍过了，主要问题就是不同浏览器需要写不同代码，并且状态和错误处理写起来很麻烦。

用jQuery的相关对象来处理AJAX，不但不需要考虑浏览器问题，代码也能大大简化。

### ajax

jQuery在全局对象`jQuery`（也就是`$`）绑定了`ajax()`函数，可以处理AJAX请求。`ajax(url, settings)`函数需要接收一个URL和一个可选的`settings`对象，常用的选项如下：

- async：是否异步执行AJAX请求，默认为`true`，千万不要指定为`false`；
- method：发送的Method，缺省为`'GET'`，可指定为`'POST'`、`'PUT'`等；
- contentType：发送POST请求的格式，默认值为`'application/x-www-form-urlencoded; charset=UTF-8'`，也可以指定为`text/plain`、`application/json`；
- data：发送的数据，可以是字符串、数组或object。如果是GET请求，data将被转换成query附加到URL上，如果是POST请求，根据contentType把data序列化成合适的格式；
- headers：发送的额外的HTTP头，必须是一个object；
- dataType：接收的数据格式，可以指定为`'html'`、`'xml'`、`'json'`、`'text'`等，缺省情况下根据响应的`Content-Type`猜测。

其他选项详情[w3c](https://www.w3school.com.cn/jquery/ajax_ajax.asp).

下面的例子发送一个GET请求，并返回一个JSON格式的数据：

```javascript
var jqxhr = $.ajax('/api/categories', {
    dataType: 'json'
});
// 请求已经发送了
```

不过，如何用回调函数处理返回的数据和出错时的响应呢？

```javascript
var jqxhr = $.ajax('/api/categories', {
    dataType: 'json'
}).success(function (data) {
    ajaxLog('成功, 收到的数据: ' + JSON.stringify(data));
}).error(function (xhr, status) {
    ajaxLog('失败: ' + xhr.status + ', 原因: ' + status);
}).complete(function () {
    ajaxLog('请求完成: 无论成功或失败都会调用');
});
```

回调函数详情[w3c](https://www.w3school.com.cn/jquery/ajax_ajax.asp)。

### 安全限制

jQuery的AJAX完全封装的是JavaScript的AJAX操作，所以它的安全限制和前面讲的用JavaScript写AJAX完全一样。

如果需要使用JSONP，可以在`ajax()`中设置`jsonp: 'callback'`，让jQuery实现JSONP跨域加载数据。

关于跨域的设置请参考[浏览器](https://www.liaoxuefeng.com/wiki/1022910821149312/1023022129105888) - [AJAX](浏览器/AJAX.md)一节中CORS的设置。