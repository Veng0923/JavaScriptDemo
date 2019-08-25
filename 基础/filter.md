# filter

filter也是一个常用的操作，它用于把`Array`的某些元素过滤掉，然后返回剩下的元素。

和`map()`类似，`Array`的`filter()`也接收一个函数。和`map()`不同的是，`filter()`把传入的函数依次作用于每个元素，然后根据返回值是`true`还是`false`决定保留还是丢弃该元素。

例如：

```javascript
let arr = [1,2,4,5,6,9,10];
// 获取和
let sum = arr.reduce(function (x,y) {
    return x+y;
});
// 获取长度
let length = arr.length;
// 取得平均数
let average = sum / length;
// 保留大于平均数的数
let r = arr.filter(function (x) {
    return x > average;
});//[ 6, 9, 10 ]
```

把一个`Array`中的去空，可以这么写：

```javascript
const array = ['a','','b','','c',null];
const notEmptyArray = array.filter(function (x) {
    return x && x.trim();
}); // [ 'a', 'b', 'c' ]
```

利用`filter`，可以巧妙地去除`Array`的重复元素：

```javascript
const repeatArray = [1,2,11,2,3,4,1];
let notRepeatArray = repeatArray.filter(function (x, index, self) {
    return self.indexOf(x) === index;
}); // [ 1, 2, 11, 3, 4 ]
```

筛选素数：

```javascript
const randomArray = [];
for (let i = 1; i < 100; i++) {
    randomArray.push(i);
}

const primeArray = randomArray.filter(function (x) {
    let temp = [];
    for (let i = 1; i <= x; i++) {
        if (x % i === 0){
            temp.push(i);
        }
    }
    return temp.length === 2;
});
```

