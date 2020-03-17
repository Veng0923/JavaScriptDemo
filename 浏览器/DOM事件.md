# DOM事件

当发什么情况时,触发什么事件.

### click事件

<font color=red>注意</font>:该事件在同一元素上发生了鼠标按下事件之后又发生了鼠标放开事件时才发生的

```javascript
element.onclick = function(){
    //...
}
```

例如:

```html
<button id='btn'>
    Click me
</button>
<script>
    document.getElementById('btn').onclick = function(){
        alert("点击事件发生");
    }
</script>
```

<button id='btn'>
    Click me
</button>

<script>document.getElementById('btn').onclick = function(){alert("点击事件发生");}</script>

### onblur事件

在对象失去焦点时发生

例如:

```html
<label>
    <input id="blur" placeholder='失去焦点时触发'>
</label>
<script type="text/javascript">
    document.getElementById("blur").onblur = ()=>{
        alert("blur事件发生");
    }
</script>
```


<label>    <input id="blur" placeholder='失去焦点时触发'/></label><script type="text/javascript">    document.getElementById("blur").onblur = ()=>{        alert("blur事件发生");    }</script>
