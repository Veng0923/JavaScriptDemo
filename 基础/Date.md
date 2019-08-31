# Date

在JavaScript中，`Date`对象用来表示日期和时间。

要获取系统当前时间，用：

```javascript
const date = new Date();//  注意要new 否则调用不了方法
console.log(date.toString()); // Sat Aug 31 2019 19:09:13 GMT+0800 (GMT+08:00)
console.log(date.getFullYear()); // 2019, 年份
console.log(date.getMonth()); // 7,月份，注意月份范围是0~11，7表示八月
console.log(date.getDate()); // 31号
console.log(date.getDay()); // 6,星期六
console.log(date.getHours()); // 18,时
console.log(date.getMinutes()); // 52,分
console.log(date.getSeconds()); // 24,秒
console.log(date.getMilliseconds()); // 202,毫秒
console.log(date.getTime()); //1567248744202 时间戳
```

如果要创建一个指定日期和时间的`Date`对象，可以用：

```javascript
// 获取指定时间
const next = new Date(2020,1,1,1,1,1);
console.log(next.toString()); // Sat Feb 01 2020 01:01:01 GMT+0800 (GMT+08:00)
```

更有意思的是，还能够用来自动更正时间：

```javascript
// 传入一个错误的时间 会自动校正
const errorDate = new Date(2020,1,55,1,1,1);
console.log(errorDate.toString()); // Thu Mar 26 2020 01:01:01 GMT+0800 (GMT+08:00)
```

一定要注意月份的问题，0-11。

第二种创建一个指定日期和时间的方法是解析一个符合[ISO 8601](http://www.w3.org/TR/NOTE-datetime)格式的字符串：

```javascript
const isoDate = Date.parse('2020-09-23T22:49:22.875+08:00');
console.log(isoDate.toString()); // 1600872562875
```

但它返回的不是`Date`对象，而是一个时间戳。不过有时间戳就可以很容易地把它转换为一个`Date`：

```javascript
const timeStampDate = new Date(1600872562875);
console.log(timeStampDate.toString()); // Wed Sep 23 2020 22:49:22 GMT+0800 (GMT+08:00)
```

### 时区

`Date`对象表示的时间总是按浏览器所在时区显示的，不过我们既可以显示本地时间，也可以显示调整后的UTC时间：

```javascript
const localDate = new Date();
// 获取本地时间
console.log(localDate.toLocaleString()); // 2019-8-31 19:21:54
// 获取 UTC 时间 相差8小时
console.log(localDate.toUTCString()); // Sat, 31 Aug 2019 11:21:54 GMT
console.log(localDate.toLocaleDateString()); // 2019-8-31
console.log(localDate.toLocaleTimeString()); // 19:21:54
```