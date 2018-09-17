7.21
<script type="text/javascript">代码</script>
引用外部文件<script src="script.js"></script>
我们可以将JavaScript代码放在html文件中任何位置，但是我们一般放在网页的head或者body部分
// 我是注释，该语句功能在网页中输出内容
 /*
    多行注释
    养成书写注释的良好习惯
   */
   函数：
function 函数名()
{
     函数代码;
}
输出空格，默认情况下空格保留，可以设置white-space:pre;或者&nbsp代替
window.open([URL], [窗口名称], [参数字符串])  打开一个新窗口

window.close();   //关闭本窗口
或
<窗口对象>.close();   //关闭指定的窗口

确认框  confirm("....") (boolean)
输入框  var url=prompt("通过输入对话框，确定打开的网址","http://www.imooc.com");

7.22
document.getElementById("id")获取DOM对象
innerHTML修改对象的HTML内容
eg:
  var mychar=document.getElementById("con");
  document.write("原标题:"+mychar.innerHTML+"<br>"); //输出原h2标签内容
  mychar.innerHTML="Hello world"
  document.write("修改后的标题:"+mychar.innerHTML);
Object.style.property=new style; 用于改变HTML样式
eg: mychar.style.color="red"

Object.style.display = value(value="none" 隐藏元素， value="block" 显示元素)
object.className = classname 为元素添加样式

对象：
var person={firstname:"Bill", lastname:"Gates", id:5566};
两种寻址方式：
name=person.lastname;
name=person["lastname"];
清空变量：name=null;
声明新变量：var carname=new String;

HTML DOM树
通过标签名寻找HTML元素：
本例查找 id="main" 的元素，然后查找 "main" 中的所有 <p> 元素：
var x=document.getElementById("main");
var y=x.getElementsByTagName("p");

HTML事件
onCLick  onload和onunload处理鼠标经过事件
onchange 事件常结合对输入字段的验证来使用
onmouseover 和 onmouseout 事件可用于在用户的鼠标移至 HTML 元素上方或移出元素时触发函数
onmousedown onmouseup

创建HTML元素
var para=document.createElement("p");
var node=document.createTextNode("这是新段落。");
para.appendChild(node);
var element=document.getElementById("div1");
element.appendChild(para);

var child=document.getElementById("p1");
child.parentNode.removeChild(child);

函数创建对象
function person(firstname,lastname,age,eyecolor)
{
this.firstname=firstname;
this.lastname=lastname;
this.age=age;
this.eyecolor=eyecolor;
}
2018.9.8 表单验证
eg.
function validateForm()
{
  var x=document.forms["myForm"]["fname"].value;
  if (x==null || x=="")
  {
    alert("姓必须填写");
    return false;
  }
}
html调用validateForm:
<form name="myForm" action="demo-form.php" onsubmit="return validateForm()" method="post">
姓: <input type="text" name="fname">
<input type="submit" value="提交">
</form>
验证api
Dom方法
checkValidity() 确认输入数据是否合法
setCustomValidity() 修改自定义提示
DOM属性
validity 返回input是否合法
validationMessage 	浏览器错误提示信息
willValidate 	指定 input 是否需要验证
.....
javascrpit:void(表达式或值) 不返回值，但里面表达式会执行

函数表达式
JavaScript 函数可以通过一个表达式定义。
函数表达式可以存储在变量中：
实例
var x = function (a, b) {return a * b}; 
函数构造器：Function()
var myFunction = new Function("a", "b", "return a * b");
var x = myFunction(4, 3);

函数提升（Hoisting）
提升（Hoisting）是 JavaScript 默认将当前作用域提升到前面去的的行为。
提升（Hoisting）应用在变量的声明与函数的声明。
使用表达式定义函数时无法提升。

匿名函数自动调用表达式：
(function(){})()
(函数定义)

函数参数（2018.9.10）
参数规则
JavaScript 函数定义时显式参数没有指定数据类型。
JavaScript 函数对隐式参数没有进行类型检测。
JavaScript 函数对隐式参数的个数没有进行检测。
默认参数：eg
function myFunction(x, y) {
    if (y === undefined) {
          y = 0;
    } 
}
agrgument对象：包含函数调用的参数数组
eg。
x = sumAll(1, 123, 500, 115, 44, 88);
function sumAll() {
    var i, sum = 0;
    for (i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
值传递的参数在函数外不会改变，对象则会改变
this关键字 对象本身
函数既是HTML页面对象的函数，也是winow对象的函数

闭包可以访问上一层函数的变量
eg。
var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}//闭包函数
})();
 
add();
add();
add();
// 计数器为 3

    JavaScript 能够改变页面中的所有 HTML 元素   document.getElementById("p1").innerHTML="新文本!";
    JavaScript 能够改变页面中的所有 HTML 属性   document.getElementById(id).attribute=新属性值
    JavaScript 能够改变页面中的所有 CSS 样式    document.getElementById(id).style.property=新样式
    JavaScript 能够对页面中的所有事件做出反应    
    1.<button type="button"
onclick="document.getElementById('id1').style.color='red'">
点我!</button>
    2.document.getElementById("myBtn").onclick=function(){displayDate()};
    3.<body onload="checkCookies()">  (onload和unload事件进入或离开页面触发，检测访问者的浏览器类型和浏览器版本)
    4.<input type="text" id="fname" onchange="upperCase()">  （onchange事件，改变字段时触发）
    5.onmouseover和onmouseout事件，用户鼠标移入或者移出html元素时触发
    6.onmousedown、onmouseup 以及 onclick 事件  
       首先当点击鼠标按钮时，会触发 onmousedown 事件，当释放鼠标按钮时，
       会触发 onmouseup 事件，最后，当完成鼠标点击时，会触发 onclick 事件
    7.onfouse

    通过 id 找到 HTML 元素    eg. var x=document.getElementById("intro"); 
    通过标签名找到 HTML 元素   var y=x.getElementsByTagName("p");
    通过类名找到 HTML 元素     var x=document.getElementsByClassName("intro"); 


addEventListener()方法 可以向一个元素添加多个事件句柄
     当你使用 addEventListener() 方法时, JavaScript 从 HTML 标记中分离开来，可读性更强， 在没有控制HTML标记时也可以添加事件监听。
     你可以使用 removeEventListener() 方法来移除事件的监听。
     语法：element.addEventListener(event, function, useCapture);（useCapture选择描述事件是冒泡还是捕获）

（9.13）
appendChild（）要创建新的 HTML 元素 (节点)需要先创建一个元素，然后在已存在的元素中添加它。
 var para = document.createElement("p");
 var node = document.createTextNode("这是一个新的段落。");
 para.appendChild(node);
insertBefore（）将新元素插进开始位置
removeChild()移除一个元素的子元素
replaceChild() 方法来替换 HTML DOM 中的元素

DOM集合
Collection   var x=document.getElementsByTagName("p")
     x是一个集合  可以使用x[i],x.length
NodeList  所有浏览器的 childNodes 属性返回的是 NodeList 对象。
          大部分浏览器的 querySelectorAll() 返回 NodeList 对象。
          
pcoll=document.querySelectorAll("p")
plist=document.getElementsByTagName("p")
以上 pcoll 返回的就是固定的值。
而获取 plist 后, 若 html 页面有变化且刚好添加或移除了 p 标签, 此时plist也会跟着变。
JavaScript for...in 循环

person=new Object();
person.firstname="John";
等于
person={firstname:"John",lastname:"Doe",age:50,eyecolor:"blue"}; 
等于

function person(firstname,lastname,age,eyecolor)
{
    this.firstname=firstname;
    this.lastname=lastname;
    this.age=age;
    this.eyecolor=eyecolor;
}

Number对象
    科学记数法  var y=123e5;    // 12300000
    数字不分为整数类型和浮点型类型，所有的数字都是由 浮点型类型（64位）。
    如果前缀为 0，则 JavaScript 会把数值常量解释为八进制数，如果前缀为 0 和 "x"，则解释为十六进制数。
 
    var myNumber=128;
    myNumber.toString(16);   // 返回 80
    
无穷大（Infinity）
 isNaN() 全局函数来判断一个值是否是 NaN 值
 
 var x = 123;
var y = new Number(123);
typeof(x) // 返回 Number
typeof(y) // 返回 Object

字符串对象String
      使用位置（索引）可以访问字符串中任何的字符
      可以在字符串中使用转义字符(\)使用引号  var answer="He is called \"Johnny\"";
      length，indexOf(),lastIndexOf() ,match(),replace() ,toUpperCase() / toLowerCase(),split(),
  
Date
    new Date() // 当前日期和时间
    new Date(milliseconds) //返回从 1970 年 1 月 1 日至今的毫秒数
    new Date(dateString)
    new Date(year, month, day, hours, minutes, seconds, milliseconds)
    
    getFullYear() 获取年份
    getTime() 返回从 1970 年 1 月 1 日至今的毫秒数
    toUTCString()将当日的日期（根据 UTC）转换为字符串
    getDay() 和数组来显示星期，而不仅仅是数字
    
（2018.9.17）
js改变css样式
    document.getElementById(id).style.property=新样式
创建数组
     var myCars=new Array("Saab","Volvo","BMW");
     var myCars=["Saab","Volvo","BMW"];
     你可以在一个数组中包含对象元素、函数、数组
Math对象
     方法
     round(),random(),max().min()
     常量
     Math.E,Math.PI,Math.SQRT2,Math.SQRT1_2,Math.LN2,Math.LN10,Math.LOG2E,Math.LOG10E
Regexp 正则表达式对象
     语法
       var patt=new RegExp(pattern,modifiers);
       或更简单的方法
       var patt=/pattern/modifiers; 
     实例 1
       在字符串中不区分大小写找"runoob"
       var str = "Visit RUnoob";
       var patt1 = /runoob/i;
       i - 修饰符是用来执行不区分大小写的匹配。
       g - 修饰符是用于执行全文的搜索（而不是在找到第一个就停止查找,而是找到所有的匹配）。
     方法
        test()方法搜索字符串指定的值，根据结果并返回真或假。
        exec() 方法检索字符串中的指定值。返回值是被找到的值。如果没有发现匹配，则返回 null。
        
 Window对象
     Window 方法
       window.open() - 打开新窗口
       window.close() - 关闭当前窗口
       window.moveTo() - 移动当前窗口
       window.resizeTo() - 调整当前窗口的尺寸
     Window尺寸
       实用的 JavaScript 方案（涵盖所有浏览器）：
      实例
       var w=window.innerWidth
       || document.documentElement.clientWidth
       || document.body.clientWidth;
       var h=window.innerHeight
       || document.documentElement.clientHeight
       || document.body.clientHeight; 
Window  screen
    screen.availWidth - 可用的屏幕宽度
    screen.availHeight - 可用的屏幕高度
Window Location
    location.hostname 返回 web 主机的域名
    location.pathname 返回当前页面的路径和文件名
    location.port 返回 web 主机的端口 （80 或 443）
    location.protocol 返回所使用的 web 协议（http:// 或 https://）
Window history
    history.back() - 与在浏览器点击后退按钮相同
    history.forward() - 与在浏览器中点击向前按钮相同
window.navigator 对象在编写时可不使用 window 这个前缀。
实例
<div id="example"></div>
<script>
txt = "<p>浏览器代号: " + navigator.appCodeName + "</p>";
txt+= "<p>浏览器名称: " + navigator.appName + "</p>";
txt+= "<p>浏览器版本: " + navigator.appVersion + "</p>";
txt+= "<p>启用Cookies: " + navigator.cookieEnabled + "</p>";
txt+= "<p>硬件平台: " + navigator.platform + "</p>";
txt+= "<p>用户代理: " + navigator.userAgent + "</p>";
txt+= "<p>用户代理语言: " + navigator.systemLanguage + "</p>";
document.getElementById("example").innerHTML=txt;
</script> 
    由于 navigator 可误导浏览器检测，使用对象检测可用来嗅探不同的浏览器。
    由于不同的浏览器支持不同的对象，您可以使用对象来检测浏览器。例如，由于只有 Opera 支持属性 "window.opera"，您可以据此识别出 Opera。
window.confirm("sometext");
window.prompt("sometext","defaultvalue");

在 JavaScritp 中使用计时事件是很容易的，两个关键方法是:
    setInterval() - 间隔指定的毫秒数不停地执行指定的代码。
      window.setInterval("javascript function",milliseconds);
      停止执行
      window.clearInterval(intervalVariable)
    setTimeout() - 在指定的毫秒数后执行指定代码。
      myVar= window.setTimeout("javascript function", milliseconds);
      停止执行  window.clearTimeout(timeoutVariable)
Cookie 
    读取 cookie： var x = document.cookie;
    修改 cookie 类似于创建 cookie，如下所示：
       document.cookie="username=John Smith; expires=Thu, 18 Dec 2013 12:00:00 GMT; path=/";
    删除Cookie只需要设置 expires 参数为以前的时间即可，如下所示，设置为 Thu, 01 Jan 1970 00:00:00 GMT:
       document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    


