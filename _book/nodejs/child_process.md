# child_process

  node遵循的是单线程单进程的模式，node的单线程是指js的引擎只有一个实例，且在nodejs的主线程中执行，同时node以事件驱动的方式处理IO等异步操作。node的单线程模式，只维持一个主线程，大大减少了线程间切换的开销。



  但是node的单线程使得在主线程不能进行CPU密集型操作，否则会阻塞主线程。对于CPU密集型操作，在node中通过child_process可以创建独立的子进程，父子进程通过IPC通信，子进程可以是外部应用也可以是node子程序，子进程执行后可以将结果返回给父进程。



 我们平时所说的单线程是指node中只有一个js引擎在主线程上运行。其他异步IO和事件驱动相关的线程通过libuv来实现内部的线程池和线程调度。libv中存在了一个Event Loop，通过Event Loop来切换实现类似于多线程的效果。简单的来讲Event Loop就是维持一个执行栈和一个事件队列，当前执行栈中的如果发现异步IO以及定时器等函数，就会把这些异步回调函数放入到事件队列中。当前执行栈执行完成后，从事件队列中，按照一定的顺序执行事件队列中的异步回调函数。

---

### 创建子进程

child_process提供了4个方法，用于新建子进程，这4个方法分别为spawn、execFile、exec和fork，所有的方法都是异步。

- **spawn** ： 子进程中执行的是非node程序，提供一组参数后，执行的结果以流的形式返回。
- **execFile**：子进程中执行的是非node程序，提供一组参数后，执行的结果以回调的形式返回。
- **exec**：子进程执行的是非node程序，传入一串shell命令，执行后结果以回调的形式返回，与execFile 
  不同的是exec可以直接执行一串shell命令。
- **fork**：子进程执行的是node程序，提供一组参数后，执行的结果以流的形式返回，与spawn不同，fork生成的子进程只能执行node应用。接下来的小节将具体的介绍这一些方法。

---

#### spawn

示例：

```js
const childProcess = require("child_process");

const hello = childProcess.spawn("echo",['hello','world']);
hello.stdout.pipe(process.stdout);
```

运行shell命令echo（打印）,参数用数组包含，不直接执行 echo hello world,是为了防止注入攻击，将流导入控制台的输出。然后控制台会打印 hello world.

---

#### exec

示例：

```js
const childProcess = require("child_process");

childProcess.exec("echo hello world",(error,stdout)=>{
    if (error) {
        console.log(error);
    }else {
        console.log(stdout);
    }
});
```

`exec`,就可以直接运行shell命令，但是这样比较危险。如果在后面又加了一条rm指令，就有意思了。所有为了让程序按照我们预期的运行，建议不用exec，可以用execFile代替。

所以有了execFile，它可以防止注入攻击。

---

#### execFile

```js
const childProcess = require("child_process");

childProcess.execFile('echo',['hello','world'],(error,stdout)=>{
    if (error) {
        console.log(error);
    }else {
        console.log(stdout);
    }
});
```

与exec相比，参数是以数组的方式传入。

---

#### fork

前面的都是运行 shell 程序，`fork`可以运行node子进程，并且可以与父进程进行通信。

示例：

fork-child.js:

```js
console.log(`I am child`);
process.send("hello parent");
process.on(`message`,message=>{
    console.log(`child receive: ${message}`);
});
```

parent:

```js
const childProcess = require("child_process");

console.log(`I am parent`);
const spawn = childProcess.fork("./fork-child");
spawn.on('message',message=>{
    console.log(`parent receive: ${message}`);
    spawn.send("hello child");
});
```

运行parent：

```shell
I am parent
I am child
parent receive: hello parent
child receive: hello child
```

上面程序是，先是fork了一个子进程，子进程就运行了，然后子进程向父进程发送消息，parent监听到了并打印，并向child发送了一条消息，child也监听到了并打印了父进程发送的消息。