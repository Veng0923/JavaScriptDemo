# sort

JavaScript的`Array`的`sort()`方法就是用于排序的，但是排序结果可能让你大吃一惊：

```javascript
// 看上去正常的结果:
['Google', 'Apple', 'Microsoft'].sort(); // ['Apple', 'Google', 'Microsoft'];

// apple排在了最后:
['Google', 'apple', 'Microsoft'].sort(); // ['Google', 'Microsoft", 'apple']

// 无法理解的结果:
[10, 20, 1, 2].sort(); // [1, 10, 2, 20]
```

第二个排序把`apple`排在了最后，是因为字符串根据ASCII码进行排序，而小写字母`a`的ASCII码在大写字母之后。

第三个排序结果是什么鬼？简单的数字排序都能错？

这是因为`Array`的`sort()`方法默认把所有元素先转换为String再排序，结果`'10'`排在了`'2'`的前面，因为字符`'1'`比字符`'2'`的ASCII码小。

如果不知道`sort()`方法的默认排序规则，直接对数字排序，绝对栽进坑里！

幸运的是，`sort()`方法也是一个高阶函数，它还可以接收一个比较函数来实现自定义的排序。

```javascript
const numberArray = [10,20,1,2];
numberArray.sort(function (x, y) {
    return x-y; // 返回正数则调换位置
}); // [ 1, 2, 10, 20 ]
```

对字符串的排序:

```javascript
stringArray.sort(function (x, y) {
    const upperX = x.toLocaleUpperCase();
    const upperY = y.toLocaleUpperCase();
    if (upperX < upperY){
        return -1;
    }else if (upperX > upperY){
        return 1;
    }else{
        return 0;
    }
});  //  [ 'apple', 'Google', 'Microsoft' ]
```

最后友情提示，`sort()`方法会直接对`Array`进行修改，它返回的结果仍是当前`Array`：

```javascript
var a1 = ['B', 'A', 'C'];
var a2 = a1.sort();
a1; // ['A', 'B', 'C']
a2; // ['A', 'B', 'C']
a1 === a2; // true, a1和a2是同一对象
```

