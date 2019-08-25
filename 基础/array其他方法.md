# array其他方法

### every

`every()`方法可以判断数组的所有元素是否满足测试条件。

例如，给定一个包含若干字符串的数组，判断所有字符串是否满足指定的测试条件：

```javascript
const fruit = ['Apple','pear','orange'];
const isMoreThan = fruit.every(function (value) {
    return value.length > 3;
}); // true
const isLower = fruit.every(function (value) {
    return value.toLowerCase() === value;
}); // false
```

### find

`find()`方法用于查找符合条件的第一个元素，如果找到了，返回这个元素，否则，返回`undefined`：

```javascript
const fruit = ['Apple','pear','orange'];
const findLower = fruit.find(function (value) {
    return value.toLowerCase() === value;
}); // pear
const findUpper = fruit.find(function (value) {
    return value.toUpperCase() === value;
}); // undefined
```

### findIndex

`findIndex()`和`find()`类似，也是查找符合条件的第一个元素，不同之处在于`findIndex()`会返回这个元素的索引，如果没有找到，返回`-1`.

### forEach

`forEach()`和`map()`类似，它也把每个元素依次作用于传入的函数，但不会返回新的数组。`forEach()`常用于遍历数组，因此，传入的函数不需要返回值：

```javascript
const fruit = ['Apple','pear','orange'];
fruit.forEach(function (value) {
    console.log(value);
});
```

