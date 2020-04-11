# Jquery

你可能听说过jQuery，它名字起得很土，但却是JavaScript世界中使用最广泛的一个库。

江湖传言，全世界大约有80~90%的网站直接或间接地使用了jQuery。鉴于它如此流行，又如此好用，所以每一个入门JavaScript的前端工程师都应该了解和学习它。

jQuery这么流行，肯定是因为它解决了一些很重要的问题。实际上，jQuery能帮我们干这些事情：

- 消除浏览器差异：你不需要自己写冗长的代码来针对不同的浏览器来绑定事件，编写AJAX等代码；
- 简洁的操作DOM的方法：写`$('#test')`肯定比`document.getElementById('test')`来得简洁；
- 轻松实现动画、修改CSS等各种操作。

jQuery的理念“Write Less, Do More“，让你写更少的代码，完成更多的工作！

### 使用jQuery

使用jQuery只需要在页面的`<head>`引入jQuery文件即可：

```
<html>
<head>
    <script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
	...
</head>
<body>
    ...
</body>
</html>
```

查看Jquery版本：

```javascript
console.log('jQuery版本：' + $.fn.jquery);
```

### $符号

`$`是著名的jQuery符号。实际上，jQuery把所有功能全部封装在一个全局变量`jQuery`中，而`$`也是一个合法的变量名，它是变量`jQuery`的别名：

```javascript
window.jQuery; // jQuery(selector, context)
window.$; // jQuery(selector, context)
$ === jQuery; // true
typeof($); // 'function'
```

`$`本质上就是一个函数，但是函数也是对象，于是`$`除了可以直接调用外，也可以有很多其他属性。

<font color=red>*注意*</font>，你看到的`$`函数名可能不是`jQuery(selector, context)`，因为很多JavaScript压缩工具可以对函数名和参数改名，所以压缩过的jQuery源码`$`函数可能变成`a(b, c)`。

绝大多数时候，我们都直接用`$`（因为写起来更简单嘛）。但是，如果`$`这个变量不幸地被占用了，而且还不能改，那我们就只能让`jQuery`把`$`变量交出来，然后就只能使用`jQuery`这个变量.



