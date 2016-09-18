let arr=[1,2];
let obj={a:"aaa"};
/*判断数组类型和对象类型*/

//typeof无法判断
console.log(typeof arr);//obj
console.log(typeof obj);//obj

//instanceof认为数组既是对象也是数组
console.log(arr instanceof Array);//true
console.log(arr instanceof Object);//true
console.log(obj instanceof Array);//false
console.log(obj instanceof Object);//true

//constructor:每一个对象或者数组都有自己的构造函数，我们完全可以把他打印出来，唯一遗憾的是！！！！
//constructor的构造函数是可以改变的，这就很坑。。。如果作死改了它，就真的被改变了：）
console.log(arr.constructor === Object);
arr.constructor = Object;
console.log(arr.constructor === Object);
//我委屈的笑了，讲真constructor你好没尊严哦!


//比较好的方式：1.利用Object的toString函数
console.log(Object.prototype.toString.call(obj));
console.log(Object.prototype.toString.call(arr));//【Object type】
console.log(Object.prototype.toString.apply(arr));//【Object type】

//2.利用Array.isArray
console.log(Array.isArray(arr));

