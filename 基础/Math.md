# Math

JavaScript Math 对象允许您对数字执行数学任务.

```javascript
const pi = Math.PI; // 3.141592653589793
// 四舍五入为最接近的整数
Math.round(6.8); // 7
// Math.pow(x, y) 的返回值是 x 的 y 次幂
Math.pow(8,2); // 64
// Math.sqrt(x) 返回 x 的平方根
Math.sqrt(64); // 8
// 绝对值
Math.abs(-4.7); // 4.7
// Math.ceil(x) 的返回值是 x 上舍入最接近的整数
Math.ceil(6.4); // 7
// Math.floor(x) 的返回值是 x 下舍入最接近的整数
Math.floor(2.7); // 2
// Math.sin(x) 返回角 x（以弧度计）的正弦（介于 -1 与 1 之间的值）
Math.sin(Math.PI / 2);
// Math.min() 和 Math.max() 可用于查找参数列表中的最低或最高值
Math.min(0, 450, 35, 10, -8, -300, -78);  // 返回 -300
// Math.random() 返回介于 0（包括） 与 1（不包括） 之间的随机数
Math.random();     // 返回随机数
```